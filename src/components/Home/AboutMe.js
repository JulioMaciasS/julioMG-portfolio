import React from 'react'

function AboutMe() {
  return (
    <section className=" py-12 flex justify-center">
      <div className="relative max-w-3xl w-full inline-block mx-4">
        {/* White filled shape offset for 3D effect */}
        <div className="absolute -bottom-3 -left-3 w-full h-full bg-[#313131] rounded-3xl" />
        <div className="relative bg-white rounded-3xl p-8 text-center shadow-lg">
          
          <h3 className="text-[#313131] text-3xl font-bold mb-4">
            Hi, I'm Julio. Nice to meet you!
          </h3>
          
          <p className="text-[#313131] text-lg leading-relaxed mb-6">
            Since 2022, I have been sharpening my Software Engineering technologies.<br />
            I have a strong passion for full-stack web development and I actively look for innovative ways 
            to leverage technology to help drive business success.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">Problem Solver</span>
            <span className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">Team Player</span>
            <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">Full-Stack Developer</span>
            <span className="bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">Continuous Learner</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe