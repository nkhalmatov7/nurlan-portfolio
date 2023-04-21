import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import mainPhoto from '../assets/mainPic.jpeg'

const Main = () => {
  return (
    <div id="main">
      <div
        className="w-full h-screen bg-no-repeat bg-cover bg-bottom"
        style={{ backgroundImage: `url(${mainPhoto})` }}
      ></div>
      {/* <img
        className="w-screen h-screen object-buttom"
        src={mainPhoto}
        alt="My photo"
      /> */}
      <div className="w-full h-screen absolute top-0 bg-white/50 text-black">
        <div className="max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center">
          <h2 className="sm:text-3xl text-xl font-bold font-serif">
            I'm
            <br />
            <TypeAnimation
              sequence={[
                'Nurlan Khalmatov', // Types 'One'
                1000, // Waits 1s
                'A Frontend Developer', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: '1.5em',
                display: 'inline-block',
                paddingLeft: '8px',
              }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a
              href="https://www.linkedin.com/in/nurlan-khalmatov/"
              target="_blank"
            >
              <FaLinkedin className="cursor-pointer" size={20} />
            </a>
            <a href="https://github.com/nkhalmatov7" target="_blank">
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/nurlan_khalmatov/"
              target="_blank"
            >
              <FaInstagram className="cursor-pointer" size={20} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100011381303560"
              target="_blank"
            >
              <FaFacebook className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
