import React from 'react';
import '../Post.css';
import ImageSlider from './ImageSlider';

function CineSharePost() {
  // Use constants for icons with descriptive names
  const ICONS = {
    angular: '/images/logos/angular-v18.png',
    springBoot: '/images/logos/spring-boot.png',
    mysql: '/images/logos/mysql.jpg',
    aws: '/images/logos/aws.png',
    openai: '/images/logos/openai.png'
  };

  // Group images by section for better organization
  const frontendImages = [
    {
      src: '/images/cineSharePost/mainPage.png',
      alt: 'CineShare main page',
      caption: 'Main Page'
    },
    {
      src: '/images/cineSharePost/mainLoggedPage.png',
      alt: 'CineShare logged-in interface',
      caption: 'Main Logged Page'
    },
    {
      src: '/images/cineSharePost/moviesRanking.png',
      alt: 'CineShare movies ranking interface',
      caption: 'Movies Ranking'
    }
  ];

  return (
    <div>
      <div className='post-container'>
        <div className='white-container'>
          <div className='contents-container max-w-4xl mx-auto'>
            {/* Header with logo */}
            <div className='flex flex-row items-center gap-3 mb-6 border-b border-gray-200 pb-4 w-full'>
              <img 
                src='/images/CineShare.png' 
                className='w-12 h-12 object-contain rounded-lg shadow-md' 
                alt='CineShare logo'
              />
              <h1 className="text-gray-800 mb-0 text-4xl font-bold" id='top'>CineShare</h1>
            </div>

            <div className='text-left space-y-8'>
              {/* Introduction Section */}
              <section className=" p-6 rounded-xl ">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  CineShare is a personal project focused on exploring modern web technologies and cloud infrastructure. This learning experience helped me gain valuable insights for future real-world applications.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  The platform enables users to share and discover movie and TV show recommendations within a social community.
                </p>
              </section>

              {/* Technologies Section */}
              <section className=" p-6 rounded-xl ">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">Technologies</h2>
                <p className="text-gray-700 mb-6">
                  Throughout this project, I have explored a variety of technologies, both frontend and backend, to build a full-stack application.
                </p>

                {/* Tech stack icons */}
                <div className='flex flex-row flex-wrap gap-6 justify-center items-center w-full text-center mb-6'>
                  {Object.entries({
                    "Angular": ICONS.angular,
                    "Spring Boot": ICONS.springBoot,
                    "MySQL": ICONS.mysql,
                    "AWS": ICONS.aws,
                    "OpenAI": ICONS.openai
                  }).map(([name, icon]) => (
                    <div key={name} className=' flex flex-col items-center transition-transform hover:scale-110'>
                      <div className="bg-white p-3 rounded-xl shadow-md mb-2 w-24 h-24 flex items-center justify-center">
                        <img 
                          src={icon} 
                          className='object-contain max-h-full max-w-full rounded-lg' 
                          alt={`${name} icon`} 
                        />
                      </div>
                      <label className='text-gray-700 font-medium'>{name}</label>
                    </div>
                  ))}
                </div>
              </section>

              {/* Frontend Section */}
              <section className=" p-6 rounded-xl ">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">Frontend</h2>
                <div className="mb-6">
                  <h3 className="font-semibold text-lg text-gray-700 mb-2">Angular CLI – HTML, CSS, TypeScript</h3>
                  <p className="text-gray-700 leading-relaxed">
                    This Angular project utilizes core Angular modules, NgRx for state management, and server-side rendering via Express. It incorporates Bootstrap and Tailwind CSS for styling, along with DaisyUI for UI components.
                  </p>
                </div>

                {/* Frontend screenshots carousel */}
                {/* Replace grid with ImageSlider */}
                <ImageSlider 
                  images={frontendImages} 
                  containerClassName="max-w-4xl mx-auto p-4 rounded-xl"
                />
              </section>

              {/* Backend Section */}
              <section className=" p-6 rounded-xl ">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">Backend</h2>
                <h3 className="font-semibold text-lg text-gray-700 mb-2">Spring Boot – Java</h3>
                <p className="text-gray-700 leading-relaxed">
                  The backend is powered by Spring Boot, leveraging multiple starters such as Data JPA for database access, Spring Security for authentication, and Spring MVC with an embedded Tomcat server. It integrates MySQL for database connectivity, Lombok to reduce boilerplate code, JJWT for JWT handling, Springdoc OpenAPI for API documentation, and Actuator for monitoring.
                </p>
              </section>

              {/* Cybersecurity Section */}
              <section className=" p-6 rounded-xl ">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">Cybersecurity</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Security features are currently under development. The frontend uses CryptoJS to encrypt payloads via AES encryption, while the backend implements Spring Security for JWT-based authentication. JWT filters unauthorized requests, and all passwords are encrypted both in transit and at rest in the database. Additionally, an SSL certificate is in place for HTTPS.
                </p>
                
                <div className='flex justify-center'>
                  <div className='max-w-md transform transition-all duration-300 hover:scale-105'>
                    <img 
                      src='/images/cineSharePost/registerPage.png' 
                      className='rounded-xl shadow-lg w-full h-auto' 
                      alt='Register page showing security implementation'
                    />
                    <p className='text-center mt-3 text-gray-600 italic'>User registration with security measures</p>
                  </div>
                </div>
              </section>

              {/* AWS Section */}
              <section className=" p-6 rounded-xl ">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">Cloud Infrastructure</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Working with AWS has been a new experience for me, moving beyond hosting simple static websites via GitHub Pages. I now use Amplify for frontend hosting, Elastic Beanstalk for backend deployment, RDS for database management, and Route 53 for domain management. This project has introduced me to the extensive possibilities of cloud computing, particularly the idea of building serverless applications.
                </p>

                <div className='flex justify-center'>
                  <div className='max-w-md transform transition-all duration-300 hover:scale-105'>
                    <img 
                      src='/images/cineSharePost/awsTechnologies.png' 
                      className='rounded-xl shadow-lg w-full h-auto' 
                      alt='AWS technologies diagram'
                    />
                    <p className='text-center mt-3 text-gray-600 italic'>AWS Services Architecture</p>
                  </div>
                </div>
              </section>

              {/* AI Tools Section */}
              <section className=" p-6 rounded-xl ">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">AI Tools</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  GitHub Copilot and ChatGPT have been invaluable companions throughout this project. Copilot assisted with code-related queries and context-driven suggestions, while ChatGPT was helpful for broader questions, such as selecting appropriate cloud solutions.
                </p>
                
                <div className='flex justify-center'>
                  <div className='max-w-md'>
                    <img 
                      src='/images/cineSharePost/copilotCover.png' 
                      className='rounded-xl shadow-lg w-full h-auto' 
                      alt='GitHub Copilot interface'
                    />
                  </div>
                </div>
              </section>

              {/* Conclusion Section */}
              <section className=" p-6 rounded-xl ">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">Conclusion</h2>
                <p className="text-gray-700 leading-relaxed">
                  This project has enabled me to develop a full-stack application, covering various aspects from frontend to backend, security, and cloud infrastructure.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  My next project will explore serverless web apps, NoSQL databases, and AI APIs.
                </p>
                <p className="italic text-gray-500 mt-6">CineShare is no longer available.</p>
              </section>

              {/* Footer */}
              <div className="text-right border-t border-gray-200 pt-4 mt-8">
                <p className="text-gray-600">
                  Thank you for reading,
                </p>
                <p className="font-semibold text-gray-800">Julio Macias Gonzalez</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CineSharePost;