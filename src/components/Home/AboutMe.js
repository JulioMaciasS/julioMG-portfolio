import React from 'react'

function AboutMe() {
  return (
    <section className="bg-[whitesmoke] py-12 flex justify-center">
      <div className="relative max-w-3xl w-full inline-block">
        {/* White filled shape offset for 3D effect */}
        <div className="absolute -bottom-3 -left-3 w-full h-full bg-[#313131] rounded-3xl" />
        <div className="relative bg-white rounded-3xl p-8 text-center shadow-lg">
          <h3 className="text-[#313131] text-3xl font-bold mb-4">
            Hi, I’m Julio. Nice to meet you!
          </h3>
          <p className="text-[#313131] text-lg leading-relaxed">
            Since 2022 I have been sharpening my Software Engineering technologies.<br />
            I have a strong passion for full-stack web development and I actively look for innovative ways 
            to leverage technology to help drive business success.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe