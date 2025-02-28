import React from 'react';
import '../Post.css';
import ImageSlider from './ImageSlider';

function EugeniaBravo() {
  // Define images for the slider
  const adminPanelImages = [
    {
      src: '/images/eugeniaBravoPost/AdminPanel1.png',
      alt: 'Admin Dashboard',
      caption: 'Admin Dashboard'
    },
    {
      src: '/images/eugeniaBravoPost/AdminPanel2.png',
      alt: 'Blog Posts Management',
      caption: 'Blog Posts Management'
    },
    {
      src: '/images/eugeniaBravoPost/AdminPanel3.png',
      alt: 'Edit Post Page',
      caption: 'Edit Post Page'
    },
    {
      src: '/images/eugeniaBravoPost/AdminPanel4.png',
      alt: 'Admin Navigation Menu',
      caption: 'Admin Navigation Menu'
    }
  ];

  const publicPageImages = [
    {
      src: '/images/eugeniaBravoPost/Public1.png',
      alt: 'Home Page',
      caption: 'Home Page'
    },
    {
      src: '/images/eugeniaBravoPost/Public2.png',
      alt: 'Blog',
      caption: 'Blog'
    },
    {
      src: '/images/eugeniaBravoPost/Public3.png',
      alt: 'Services',
      caption: 'Services'
    },
    {
      src: '/images/eugeniaBravoPost/Public4.png',
      alt: 'Contact Me',
      caption: 'Contact Me'
    }
  ];

  // Define technology icons for consistency
  const ICONS = {
    react: '/images/logos/react.png',
    typescript: '/images/logos/typescript.png',
    aws: '/images/logos/aws.png',
    amplify: '/images/logos/amplify.png',
    brevo: '/images/logos/brevo.png'
  };

  return (
    <div>
      <div className='post-container'>
        <div className='white-container'>
          <div className='contents-container max-w-4xl mx-auto'>
            {/* Header with logo */}
            <div className='flex flex-row items-center gap-3 mb-6 border-b border-gray-200 pb-4 w-full'>
              <img 
                src='/images/eugeniaBravoPost/EugeniaBravoIcon.png' 
                className='w-12 h-12 object-contain' 
                alt='EugeniaBravo logo'
              />
              <h1 className="text-gray-800 mb-0 text-4xl font-bold">EugeniaBravo</h1>
              <a 
                href="https://eugeniabravo.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-colors"
              >
                <i className="bi bi-arrow-up-right-square text-2xl"></i>
              </a>
            </div>

            <div className='text-left space-y-8'>
              {/* Introduction Section */}
              <section className="p-6 rounded-xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  To further develop my software engineering skills, I created eugeniabravo.com and tudivorciointeligente.com. This project not only challenged my technical abilities but also improved my client communication skills.
                </p>
              </section>

              {/* Technologies Section */}
              <section className="p-6 rounded-xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">Technologies</h2>
                <p className="text-gray-700 mb-6">
                  To develop this website, I collaborated with a friend who is also my client, choosing technologies that would enhance my software engineering skills rather than relying on out-of-the-box solutions like WordPress or Wix. This approach delivered a robust and customized website.
                </p>

                {/* Tech stack icons */}
                <div className='flex flex-row flex-wrap gap-6 justify-center items-center w-full text-center mb-6'>
                  {Object.entries({
                    "React": ICONS.react,
                    "TypeScript": ICONS.typescript,
                    "AWS": ICONS.aws,
                    "Amplify": ICONS.amplify,
                    "Brevo": ICONS.brevo
                  }).map(([name, icon]) => (
                    <div key={name} className='flex flex-col items-center transition-transform hover:scale-110'>
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
              <section className="p-6 rounded-xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">Frontend</h2>
                <h3 className="font-semibold text-lg text-gray-700 mb-2">React – TypeScript</h3>
                <p className="text-gray-700 leading-relaxed">
                  Since this was a professional project, I used React to leverage my advanced knowledge of the framework. Additionally, implementing TypeScript ensured safer data handling compared to plain JavaScript.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  To kickstart development, I experimented with an innovative AI tool called <a target='_blank' rel="noopener noreferrer" href='https://bolt.new' className='text-blue-500 hover:underline'>bolt.new</a>, which can generate a project from scratch, run it, and iteratively improve the code based on prompts. I then downloaded the generated boilerplate code to continue development.
                </p>
              </section>

              {/* Backend Section */}
              <section className="p-6 rounded-xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">Backend</h2>
                <h3 className="font-semibold text-lg text-gray-700 mb-2">AWS Amplify</h3>
                <p className="text-gray-700 leading-relaxed">
                  In a previous project, I built a Spring Boot backend integrated with an AWS RDS database. However, this approach led to issues such as unexpected crashes, increased development time, and added complexity. As a solo developer with limited time, I needed a simpler yet robust solution. That’s when I opted for AWS Amplify, a “backend as a service” solution. Amplify is easier to develop once familiar with it, and it offers a robust, cost-effective infrastructure for small to medium projects, since it is fully managed.
                </p>
              </section>

              {/* Website Structure Section */}
              <section className="p-6 rounded-xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">Website Structure</h2>
                <p className="text-gray-700 mb-6">
                  The website is divided into public access pages and admin pages.
                </p>

                {/* Public Pages Section */}
                <div className="mb-8">
                  <h3 className="font-semibold text-lg text-gray-700 mb-2">Public Pages</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The website strikes a balance between promoting Eugenia's products and inviting users to get in touch, while also providing valuable ad-free blog content.
                  </p>

                  {/* Public Pages ImageSlider */}
                  <ImageSlider
                    images={publicPageImages}
                    containerClassName="max-w-4xl mx-auto p-4 rounded-xl"
                  />
                </div>

                {/* Admin Pages Section */}
                <div>
                  <h3 className="font-semibold text-lg text-gray-700 mb-2">Admin Pages</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Protected by Amplify's User Authentication, there is a private admin page through which the website team manages content. This portal features a dashboard and an admin panel for modifying, reviewing private posts, or deleting posts.
                  </p>

                  {/* Admin Pages ImageSlider */}
                  <ImageSlider
                    images={adminPanelImages}
                    containerClassName="max-w-4xl mx-auto p-4 rounded-xl"
                  />
                </div>
              </section>

              {/* Call to Action */}
              <section className="p-6 rounded-xl bg-blue-50">
                <p className="text-gray-700 leading-relaxed text-center">
                  Need legal assistance in Spain? <a className='text-blue-500 hover:underline font-medium' href='https://www.eugeniabravo.com/contacto' target='_blank' rel="noopener noreferrer">Contact Eugenia!</a>
                </p>
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

export default EugeniaBravo;