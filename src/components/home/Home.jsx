import React from 'react'
import './Home.css'
import { useTypewriter , Cursor } from 'react-simple-typewriter'
// import profile from './images/my.jpg'
import profile from './images/me.jpg'

const Home = () => {
  const [text] = useTypewriter({
    words: ['Fullstack Developer','Designer'],
    loop:''
  })
  return (
    <div className='home-main'>

{/* ............................................................... Home .............................................................. */}

      <div className="home">
        <div className="home-profile">
          <div className="profile">
             <img src={profile} alt="" />
          </div>
        </div>
        <div className="name">
            <h1>Anshid</h1>
        </div>
        <div className="slide-name">
            <p>I'm a <span>{text}</span><Cursor/></p>
        </div>
        <div className="home-contact">
          <button className='contact-button'>Download CV</button>
        </div>
      </div>
      
{/* ................................................................. About Me ............................................................. */}

      <div className="about-main">
        
      </div>

    </div>
  )
}

export default Home