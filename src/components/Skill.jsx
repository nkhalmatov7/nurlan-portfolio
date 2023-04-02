import React from 'react'
import { motion } from 'framer-motion'
import './Skill.css'

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}

const Skill = ({ skill }) => {
  return (
    <motion.li variants={projectVariant}>
      <p className="font-playfair hover:scale-110 transition duration-500 custom-class">
        {skill}
      </p>
    </motion.li>
  )
}

export default Skill
