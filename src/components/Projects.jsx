import React from 'react'
import ProjectItem from './ProjectItem'
import whatsApp_clone from '../assets/whatsApp_clone.png'
import my_portfolio from '../assets/my_portfolio.png'

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#25241f] font-serif">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
        reiciendis iure, rerum molestias tenetur expedita adipisci quia
        perspiciatis maxime? Pariatur totam dicta molestias? Ipsa perferendis
        odio delectus exercitationem perspiciatis tempora?
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={whatsApp_clone} title="WhatsApp Clone" desc="JavaScript, React, Context API, Firebase, Google Auth" link='https://whatsapp-clone-c1d01.web.app/'/>
        <ProjectItem img={my_portfolio} title="My Portfolio" desc="JavaScript, React, Context API, Firebase, Google Auth" link='https://main--nurlans-portfolio.netlify.app/'/>
      </div>
    </div>
  )
}

export default Projects
