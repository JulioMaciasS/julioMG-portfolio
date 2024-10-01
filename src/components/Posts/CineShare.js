import React from 'react'
import '../Post.css'

function CineSharePost() {

  let angularIcon = './images/logos/angular-v18.jpeg';
  let springBootIcon = './images/logos/spring-boot.png';
  let mySqlIcon = './images/logos/mysql.jpg';
  let awsIcon = './images/logos/aws.png';
  let openAiIcon = './images/logos/openai.png';

  return (
    <div>
      <div className='post-container'>

        <div className='white-container'>
          <div className='contents-container'>
       <div className='flex flex-row items-center gap-2'>
  <h1 className="text-gray-800 mb-0 align-middle" id='top'>CineShare</h1>
  <img src='./images/CineShare.png' className='w-10 h-10 object-contain rounded-xl' alt='CineShare logo'/>
  <a href='https://cineshare.juliodev.co.uk' target='_blank' rel='noopener noreferrer'>
    <i className="bi bi-arrow-up-right-square text-2xl text-blue-500"></i>
  </a>
</div>

            <div className='text-left'>
              <span>
              </span>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Introduction</h2>
              <p className="text-gray-600 mb-4">
                CineShare is a personal project created to provide a platform for discovering and exploring new movie and TV show recommendations in an organic way.
              </p>

              <br />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Technologies</h2>
              <p className="text-gray-600 mb-4 ">
                Throughout this project, I have explored a variety of technologies, both frontend and backend, to build a full-stack application.
              </p>

              <div className='flex flex-row flex-wrap gap-4 justify-center items-center w-full text-center'>
                <div className='flex flex-col'>
                  <img src={angularIcon} className='object-cover rounded-xl w-20' alt='angular icon' />
                  <label className='text-gray-600'>Angular 18</label>
                </div>
                <div className='flex flex-col'>
                  <img src={springBootIcon} className='object-cover rounded-xl w-20' alt='springboot icon' />
                  <label className='text-gray-600'>Spring Boot</label>
                </div>
                <div className='flex flex-col'>
                  <img src={mySqlIcon} className='object-cover rounded-xl w-20' alt='mySQL icon' />
                  <label className='text-gray-600'>MySQL</label>
                </div>
                <div className='flex flex-col'>
                  <img src={awsIcon} className=' rounded-xl w-20 bg-white h-20 object-contain' alt='AWS icon' />
                  <label className='text-gray-600'>AWS</label>
                </div>
                <div className='flex flex-col'>
                  <img src={openAiIcon} className='rounded-xl w-20 h-20 object-contain bg-white p-4' alt='AWS icon' />
                  <label className='text-gray-600'>OpenAI</label>
                </div>
              </div>

              <h3 className='font-semibold'>Frontend</h3>
              <p className="text-gray-600 mb-4">
                Angular CLI – HTML, CSS, TypeScript <br />
                This Angular project utilizes core Angular modules, NgRx for state management, and server-side rendering via Express. It incorporates Bootstrap and Tailwind CSS for styling, along with DaisyUI for UI components.
              </p>

              <div className='flex flex-row flex-wrap gap-2 justify-center items-center w-full'>
                <div className='flex flex-col'>
                  <img src={'./images/cineSharePost/mainPage.png'} className='object-cover rounded-xl w-80' alt='main page cineshare' />
                  <label className='text-gray-600'>Main Page</label>
                </div>
                <div className='flex flex-col'>

                  <img src={'./images/cineSharePost/mainLoggedPage.png'} className='object-cover rounded-xl w-80' alt='main logged page cineshare' />
                  <label className='text-gray-600'>Main Logged Page</label>
                </div>

                <div className='flex flex-col'>

                  <img src={'./images/cineSharePost/moviesRanking.png'} className='object-cover rounded-xl w-80' alt='movies ranking cineshare' />
                  <label className='text-gray-600'>Movies Ranking</label>
                </div>

              </div>

              <h3 className='font-semibold'>Backend</h3>
              <p className="text-gray-600 mb-4">
                Spring Boot – Java <br />
                The backend is powered by Spring Boot, leveraging multiple starters such as Data JPA for database access, Spring Security for authentication, and Spring MVC with an embedded Tomcat server. It integrates MySQL for database connectivity, Lombok to reduce boilerplate code, JJWT for JWT handling, Springdoc OpenAPI for API documentation, and Actuator for monitoring.
              </p>

              <h3 className='font-semibold'>Cybersecurity</h3>
              <p className="text-gray-600 mb-4">
                Security features are currently under development. The frontend uses CryptoJS to encrypt payloads via AES encryption, while the backend implements Spring Security for JWT-based authentication. JWT filters unauthorized requests, and all passwords are encrypted both in transit and at rest in the database. Additionally, an SSL certificate is in place for HTTPS. However, since potential security vulnerabilities are still being addressed, please avoid using real emails or passwords when testing the site.
              </p>

              <div className='flex flex-col justify-center items-center w-full'>

                <img src={'./images/cineSharePost/registerPage.png'} className='object-cover rounded-xl w-96' alt='register page cineshare' />
                <label className='text-gray-600'>Register Page</label>
              </div>

              <h3 className='font-semibold'>Database</h3>
              <p className="text-gray-600 mb-4">
                The project initially started with a local database. After exploring cloud solutions, I migrated the database to AWS RDS MySQL for scalability and reliability.
              </p>

              <h3 className='font-semibold'>Cloud Computing</h3>
              <p className="text-gray-600 mb-4">
                AWS – EC2, Route 53, Certificate Manager, Amplify, Elastic Beanstalk, RDS <br />
                Working with AWS has been a new experience for me, moving beyond hosting simple static websites via GitHub Pages. I now use Amplify for frontend hosting, Elastic Beanstalk for backend deployment, RDS for database management, and Route 53 for domain management. This project has introduced me to the extensive possibilities of cloud computing, particularly the idea of building serverless applications.
              </p>
              <div className='flex flex-col justify-center items-center w-full'>
                <img src={'./images/cineSharePost/awsTechnologies.webp'} className='object-cover rounded-xl w-96' alt='copilotCover page cineshare' />
                <label className='text-gray-600'>AWS Technologies</label>
              </div>

              <h3 className='font-semibold'>AI Tools</h3>
              <p className="text-gray-600 mb-4">
                GitHub Copilot and ChatGPT have been invaluable companions throughout this project. Copilot assisted with code-related queries and context-driven suggestions, while ChatGPT was helpful for broader questions, such as selecting appropriate cloud solutions.
              </p>

              <div className='flex flex-col justify-center items-center w-full'>
                <img src={'./images/cineSharePost/copilotCover.png'} className='object-cover rounded-xl w-96' alt='copilotCover page cineshare' />
                {/* <label className='text-gray-600'>GitHub Copilot</label> */}
              </div>

              <h3 className='font-semibold'>Scope for the Future</h3>
              <p className="text-gray-600 mb-4">
                This project has enabled me to develop a full-stack application, covering various aspects from frontend to backend, security, and cloud infrastructure. Although it is not yet finished and I plan too keep adding features and improvements to make it as good as possible. <br/><br/> I am grateful for the support from my team at Citi and the wealth of free resources provided by the developer community. In the future, I plan to contribute to the community through a YouTube channel and a blog. My next project will explore serverless web apps, NoSQL databases, and AI APIs.
              </p>

              <a href='https://cineshare.juliodev.co.uk' target='_blank' className='text-2xl text-blue-500'> Click here to visit CineShare!</a>

              <br />

              <br />

              <p className="text-gray-600">
                Thank you for reading, <br />
                <span className="font-semibold">Julio Macias Gonzalez</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CineSharePost;