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
              Thanks for taking the time to reach out.<br /> How can I help you today?
            </h1>
            <div className='h-full w-full max-w-[512px] mx-auto'>
              <iframe 
                className="basinIframe"
                src="https://usebasin.com/form/4539a1a983a5/view/297d57c4edd5?iframe=true"
                allowTransparency="true"
                frameBorder="0"
                style={{
                  border: 'none',
                  overflow: 'hidden',
                  backgroundColor: 'transparent'
                }}
                onLoad={handleIframeLoad}
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default ContactMe