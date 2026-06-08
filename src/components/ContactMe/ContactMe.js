import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Send, CheckCircle2, Loader2 } from 'lucide-react'
import "./ContactMe.css"

const WEB3FORMS_KEY = process.env.REACT_APP_WEB3FORMS_KEY;
const ENDPOINT = 'https://api.web3forms.com/submit';

function ContactMe() {
  const { t } = useTranslation();
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

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

          <div className='contact-form-card'>
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

          {/* Divider */}
          <div className="contact-divider"><span>{t('contact.or')}</span></div>

          {/* LinkedIn option */}
          <div className="contact-alt">
            <span>{t('contact.linkedinPrompt')}</span>
            <a
              href="https://www.linkedin.com/in/julio-macias-gonzalez/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#0A66C2] text-white rounded-lg font-medium flex items-center hover:bg-[#084e96] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              {t('contact.linkedinButton')}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
