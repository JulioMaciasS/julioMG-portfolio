import React from 'react'
import "./ContactMe.css"

function ContactMe() {
  const handleIframeLoad = (event) => {
    const iframe = event.target;
    const postHeight = () => {
      if (iframe.contentWindow) {
        iframe.contentWindow.postMessage('getHeight', '*');
      }
    };

    postHeight();
    const interval = setInterval(postHeight, 500);

    const handleMessage = (event) => {
      if (event.data.action === 'setHeight') {
        iframe.style.height = event.data.height + 'px';
      }
    };

    window.addEventListener('message', handleMessage);

    // Cleanup interval on component unmount
    return () => {
      clearInterval(interval);
      window.removeEventListener('message', handleMessage);
    };
  };

  return (
    <div>
      <div className='project-container'>
        <div className="project-cards-container min-h-[calc(100vh-80px)]">
          <h1 className="text-center" id='title'>
            Thanks for taking the time to reach out.
          </h1>
          <div className='contact-content'>
            <div className='contact-heading'>
              <h2>How can I help you today?</h2>
            </div>
            <div className='contact-form-card'>
              <iframe 
                className="basinIframe"
                src="https://usebasin.com/form/4539a1a983a5/view/297d57c4edd5?iframe=true"
                allowTransparency="true"
                frameBorder="0"
                style={{
                  border: 'none',
                  overflow: 'hidden',
                  backgroundColor: 'transparent',
                  margin: '0 auto'
                }}
                onLoad={handleIframeLoad}
                width="100%"
                height="100%"
              />
            </div>
            
            {/* Divider with "or" in the middle */}
            <div className="contact-divider">
              <span>or</span>
            </div>
            
            {/* LinkedIn option */}
            <div className="contact-alt">
              <span>Connect with me on LinkedIn</span>
              <a 
                href="https://www.linkedin.com/in/julio-macias-gonzalez/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 py-3 bg-[#0A66C2] text-white rounded-lg font-medium flex items-center hover:bg-[#084e96] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
