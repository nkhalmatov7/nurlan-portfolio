import React from 'react'
import { skills } from '../assets/data/dummyData'
import { motion } from 'framer-motion'
import Skill from './Skill'
import './Skill.css'

const WorkAndSkills = () => {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  }
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#25241f] font-serif">Skills</h1>
      <div id="content grid3" data-aos="flip-left">
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="md:flex md:justify-start mt-10 gap-5 flex flex-wrap"
        >
          {skills.map((skill) => (
            <Skill skill={skill} key={skill} />
          ))}
        </motion.ul>
      </div>
    </div>
  )
}

export default WorkAndSkills
