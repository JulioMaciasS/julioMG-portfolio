import React from 'react'
import Navbar from './Navbar'
import './MyProfile.css'

function MyProfile() {
  return (
    <div>
      <div className='about-container'>

        <div className='white-container'>
          <div className='texts-container'>
        <h1 id = 'top'>About me</h1>

        <section>
          <h2>Who am I?</h2>
          <p>
          My name is Julio Macias Gonzalez, born and raised in Spain. I have always been passionate about learning, particularly in the realm of technology. In my free time, I enjoy going to the gym, travelling, and occasionally playing video games. I make it a point to stay up to date with the latest advancements in technology.
          </p>
        </section>

        <section>
          <h2>Why did I decide to study Computer Science?</h2>

          <div className='txtAndPic'>
          <img src='./images/computer.png' id='computer' alt='first desktop computer picture'/>
          <p>My journey with technology began in 2014 when I received a gift, a PS4. However, as gaming consoles often struggled to deliver good performance, my curiosity about computers sparked, getting a Windows gaming laptop a year later. When dealing with a computer, often, you run into problems such as the infamous Windows blue screen, the enjoyment while solving these challenges has driven my journey.</p>
          </div>
          <p><em>Caption: First self-assembled computer in 2020.</em></p>

          <p>Because of all this, when the time came to make a choice, I knew that Computer Science was the way forward for me.</p>
        </section>

        <section>
        <h2>Academic Background</h2>

<p>In 2019, I had the opportunity to study the equivalent of Year 11 in Galway, Ireland. I finished the last two years of school at Sunland Novaschool, a British School in Malaga, and decided to move to Belfast afterward to study Computer Science at Queen’s University Belfast.</p>
        </section>

        <section id='bottom'>
<h2>Working Experience</h2>
<p>I gained experience working in a summer office job in 2019 and worked as a waiter in the summer of 2023. Currently, I am serving as a catering and floor assistant at Spar in Queen’s University Belfast, an ongoing position.</p>
        </section>
      </div>
      </div>
      </div>
    </div>
  )
}

export default MyProfile;
