import React from "react"
import "./Home.css"
import hero from "../pic/hero.png"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import { Typewriter } from "react-simple-typewriter"
import profile from "../pic/profile.jpeg";

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Priya</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Professional Coder.", " Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>I am a Java developer and SQL developer with a strong background in operating system concepts.

I have always been passionate about technology and programming, and I have honed my skills over several years of experience in the field. I specialize in developing robust and scalable Java applications, and I am proficient in SQL for database management and data analysis.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <i class='fa fa-facebook-f'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fa fa-instagram'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fa fa-linkedin'></i>
                  </button>
                </div>
              </div>
              
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={profile} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
