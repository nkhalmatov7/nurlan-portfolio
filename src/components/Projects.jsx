import React from 'react'
import ProjectItem from './ProjectItem'
import bestEats_food_app from '../assets/bestEats_food_app.png'
import whatsApp_clone from '../assets/whatsApp_clone.png'
import musicApp from '../assets/musicApp.jpeg'

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#25241f] font-serif">
        Projects
      </h1>
      <p className="text-center py-8">
        {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
        reiciendis iure, rerum molestias tenetur expedita adipisci quia
        perspiciatis maxime? Pariatur totam dicta molestias? Ipsa perferendis
        odio delectus exercitationem perspiciatis tempora? */}
      </p>
      <div className="grid sm:grid-cols-3 gap-12">
        <ProjectItem
          img={musicApp}
          title="Music App"
          desc="JavaScript, React, TailwindCSS, Netlify"
          link="https://animatedmusicapp.netlify.app/"
        />
        <ProjectItem
          img={bestEats_food_app}
          title="Food App"
          desc="JavaScript, React, TailwindCSS, Firebase"
          link="https://foodapp-9dce0.web.app/"
        />
        <ProjectItem
          img={whatsApp_clone}
          title="WhatsApp Clone"
          desc="JavaScript, React, Context API, React-Router, Firebase, Google Auth"
          link="https://whatsapp-clone-c1d01.web.app/"
        />
      </div>
    </div>
  )
}

export default Projects
