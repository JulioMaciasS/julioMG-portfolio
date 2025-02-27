import React from 'react';
import '../Post.css';

function EugeniaBravo() {
  return (
    <div className="post-container">
      <div className="white-container">
        <div className="contents-container">
          {/* Post Header */}
          <div className="flex flex-row items-center gap-2">
            <h1 className="text-gray-800 mb-0 align-middle">Post Title</h1>
            {/* Replace with your logo if needed */}
            <img 
              src={'/images/eugeniaBravoPost/EugeniaBravoIcon.png'} 
              className="w-10 h-10 object-contain rounded-xl" 
              alt="Post logo"
            />
            <a 
              href="https://eugeniabravo.com" 
              target="_blank" 
              rel="noopener noreferrer">
              <i className="bi bi-arrow-up-right-square text-2xl text-blue-500"></i>
            </a>
          </div>

          {/* Introduction Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Introduction</h2>
            <p className="text-gray-600 mb-4">
              [Insert introduction content here]
            </p>
          </section>

          {/* Technologies Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Technologies</h2>
            <p className="text-gray-600 mb-4">
              [Insert technologies overview here]
            </p>
            {/* Example technology icons and labels */}
            <div className="flex flex-row flex-wrap gap-4 justify-center items-center w-full text-center">
              <div className="flex flex-col">
                <img src={'/images/logos/angular-v18.png'} className="object-cover rounded-xl w-20" alt="Angular icon" />
                <label className="text-gray-600">Angular 18</label>
              </div>
              <div className="flex flex-col">
                <img src={'/images/logos/spring-boot.png'} className="object-cover rounded-xl w-20" alt="Spring Boot icon" />
                <label className="text-gray-600">Spring Boot</label>
              </div>
              <div className="flex flex-col">
                <img src={'/images/logos/mysql.jpg'} className="object-cover rounded-xl w-20" alt="MySQL icon" />
                <label className="text-gray-600">MySQL</label>
              </div>
              <div className="flex flex-col">
                <img src={'/images/logos/aws.png'} className="rounded-xl w-20 bg-white h-20 object-contain" alt="AWS icon" />
                <label className="text-gray-600">AWS</label>
              </div>
              <div className="flex flex-col">
                <img src={'/images/logos/openai.png'} className="rounded-xl w-20 h-20 object-contain bg-white p-4" alt="OpenAI icon" />
                <label className="text-gray-600">OpenAI</label>
              </div>
            </div>
          </section>

          {/* Frontend Section */}
          <section>
            <h3 className="font-semibold">Frontend</h3>
            <p className="text-gray-600 mb-4">
              [Insert frontend details here]
            </p>
          </section>

          {/* Backend Section */}
          <section>
            <h3 className="font-semibold">Backend</h3>
            <p className="text-gray-600 mb-4">
              [Insert backend details here]
            </p>
          </section>

          {/* Additional Sections */}
          <section>
            <h3 className="font-semibold">Additional Information</h3>
            <p className="text-gray-600 mb-4">
              [Insert additional post details here]
            </p>
          </section>

          {/* Call to Action */}
          <a href="#" target="_blank" className="text-2xl text-blue-500">
            Click here for more details!
          </a>

          {/* Post Footer */}
          <br />
          <br />
          <p className="text-gray-600">
            Thank you for reading, <br />
            <span className="font-semibold">Your Name</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default EugeniaBravo;