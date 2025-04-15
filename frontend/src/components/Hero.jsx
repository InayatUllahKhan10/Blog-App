import React from 'react';
import heroImg from "../images/hero.gif"

const Hero = () => {
  return (
    <>

      <div className="hero pt-[100px] flex flex-col items-center justify-center md:flex-row md:justify-between px-4 md:px-8 lg:px-12" style={{ height: "calc(100vh - 100px)" }}>
        <div className="left w-full md:w-1/2">
          <h3 className='text-[40px] md:text-[50px] lg:text-[60px] leading-tight' style={{lineHeight:1}}>Unlock the Secrets to <span className='sp-text'>Masterful</span> Programming Here.</h3>
          <div className="flex mt-6 items-center gap-[15px]">
            <button className='btnNormal'>Get Started</button>
            <button className='btnWhite'>Learn More</button>
          </div>
        </div>
        <div className="right w-full md:w-1/2">
          <img className='rounded-[20px] w-full' src={heroImg} alt="" />
        </div>
      </div>
    </>
  )
}

export default Hero


// <div className="hero pt-[100px] flex flex-col items-center justify-center md:flex-row md:justify-between px-4 md:px-8 lg:px-12" style={{ height: "calc(100vh - 100px)" }}>
// here in this div pt-[100px] is putting some distace between navbar and hero section but 
// on collapsing the display to mobile it navbar and hero still merge into eachother at 450-780px range
//but if we put pt-[150] there is they dont merge but the gap is bigger at normal screen display size which looks odd
//so if you came accorss this issue in future and want to give some gap here is how you can do it
//