'use client';

import React, { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Send, CheckCircle2, Loader2, MessageSquare, CalendarDays } from 'lucide-react'
import Cal, { getCalApi } from '@calcom/embed-react'
import "./ContactMe.css"

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
// Cal.com booking link, e.g. "julio-macias/intro-call". Set at build time.
const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK;
// Stable namespace shared by getCalApi() and <Cal>, so the UI-config call always
// targets this embed's iframe — Cal's recommended pattern.
const CAL_NAMESPACE = 'booking';
const ENDPOINT = 'https://api.web3forms.com/submit';

/**
 * Cal.com inline booking embed.
 *
 * Configures the embed UI once, on its own mount, against the same namespace the
 * <Cal> element registers under. Keeping the getCalApi()/cal('ui') call in the
 * same component that renders <Cal> — instead of a parent effect that re-ran on
 * every tab change — is what stops Cal's script racing into its
 * "createIframe must be called before doInIframe" error.
 */
function BookingEmbed() {
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      if (cancelled) return;
      cal('ui', {
        theme: 'light',
        cssVarsPerTheme: { light: { 'cal-brand': '#1a1717' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
    return () => { cancelled = true; };
  }, []);

  return (
    <Cal
      namespace={CAL_NAMESPACE}
      calLink={CAL_LINK}
      style={{ width: '100%', minHeight: '600px', overflow: 'scroll' }}
      config={{ layout: 'month_view' }}
    />
  );
}

function ContactMe() {
  const t = useTranslations();
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [mode, setMode] = useState('message'); // 'message' | 'call'
  // Mount the booking embed the first time the visitor opens the call tab, then
  // keep it mounted (just hidden when inactive). Lazy so the Cal script isn't
  // fetched until asked for, but never unmounted/remounted — remounting the
  // iframe is what tripped Cal's init error.
  const [callOpened, setCallOpened] = useState(false);

  useEffect(() => {
    if (mode === 'call') setCallOpened(true);
  }, [mode]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!WEB3FORMS_KEY) {
      setStatus('error');
      return;
    }
    const form = e.target;
    // Honeypot: bots fill hidden fields — silently drop.
    if (form.botcheck && form.botcheck.checked) return;

    setStatus('sending');
    const payload = {
      access_key: WEB3FORMS_KEY,
      subject: 'New message from juliomacias.dev',
      from_name: form.name.value,
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (_) {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-800 ' +
    'placeholder-gray-400 focus:border-[#1a1717] focus:ring-2 focus:ring-[#1a1717]/15 ' +
    'outline-none transition';

  return (
    <div className='project-container'>
      <div className="project-cards-container min-h-[calc(100vh-80px)]">
        <h1 className="text-center" id='title'>{t('contact.title')}</h1>

        <div className='contact-content'>
          <div className='contact-heading'>
            <h2>{t('contact.heading')}</h2>
          </div>

          {/* Slider selector: write a message, or book a call. */}
          <div className="contact-switch" role="tablist" aria-label={t('contact.heading')}>
            <span className="contact-switch-thumb" data-mode={mode} aria-hidden="true" />
            <button
              type="button"
              role="tab"
              id="contact-tab-message"
              aria-selected={mode === 'message'}
              aria-controls="contact-panel-message"
              className={`contact-switch-option ${mode === 'message' ? 'is-active' : ''}`}
              onClick={() => setMode('message')}
            >
              <MessageSquare size={18} aria-hidden="true" /> {t('contact.tabs.message')}
            </button>
            <button
              type="button"
              role="tab"
              id="contact-tab-call"
              aria-selected={mode === 'call'}
              aria-controls="contact-panel-call"
              className={`contact-switch-option ${mode === 'call' ? 'is-active' : ''}`}
              onClick={() => setMode('call')}
            >
              <CalendarDays size={18} aria-hidden="true" /> {t('contact.tabs.call')}
            </button>
          </div>

          {mode === 'message' && (
          <div className='contact-form-card' role="tabpanel" id="contact-panel-message" aria-labelledby="contact-tab-message">
            {status === 'success' ? (
              <div className="flex flex-col items-center text-center gap-3 py-10 px-4">
                <CheckCircle2 className="text-green-500" size={48} />
                <h3 className="text-xl font-bold text-gray-800">{t('contact.form.successTitle')}</h3>
                <p className="text-gray-500">{t('contact.form.successText')}</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 text-sm font-medium text-[#1a1717] underline underline-offset-4"
                >
                  {t('contact.form.sendAnother')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-2">
                {/* Honeypot */}
                <input type="checkbox" name="botcheck" className="hidden" tabIndex="-1" autoComplete="off" />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.form.name')}
                  </label>
                  <input id="name" name="name" type="text" required
                    placeholder={t('contact.form.namePlaceholder')} className={inputClass} />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.form.email')}
                  </label>
                  <input id="email" name="email" type="email" required
                    placeholder={t('contact.form.emailPlaceholder')} className={inputClass} />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.form.message')}
                  </label>
                  <textarea id="message" name="message" required rows="5"
                    placeholder={t('contact.form.messagePlaceholder')}
                    className={`${inputClass} resize-y`} />
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-600">
                    {WEB3FORMS_KEY ? t('contact.form.error') : t('contact.form.notConfigured')}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1a1717] px-6 py-3 font-semibold text-white transition hover:bg-[#000] disabled:opacity-60"
                >
                  {status === 'sending' ? (
                    <><Loader2 className="animate-spin" size={18} /> {t('contact.form.sending')}</>
                  ) : (
                    <><Send size={18} /> {t('contact.form.send')}</>
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center">{t('contact.form.privacy')}</p>
              </form>
            )}
          </div>
          )}

          {CAL_LINK ? (
            callOpened && (
              <div className='contact-cal-card' role="tabpanel" id="contact-panel-call" aria-labelledby="contact-tab-call" hidden={mode !== 'call'}>
                <BookingEmbed />
              </div>
            )
          ) : (
            mode === 'call' && (
              <div className='contact-cal-card' role="tabpanel" id="contact-panel-call" aria-labelledby="contact-tab-call">
                <div className="contact-cal-empty">
                  <CalendarDays size={40} aria-hidden="true" />
                  <p>{t('contact.cal.notConfigured')}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default ContactMe
