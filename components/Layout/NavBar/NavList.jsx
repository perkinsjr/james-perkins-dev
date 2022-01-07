import React from 'react'
import { chakra } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const MotionList = motion(chakra.ul)
export const NavList = (props) => (
  <MotionList opacity="0" initial="init" variants={variants} {...props} />
)
const variants = {
  init: {
    opacity: 0,
    y: -4,
    display: 'none',
    transition: {
      duration: 0,
    },
  },
  enter: {
    opacity: 1,
    y: 0,
    display: 'block',
    transition: {
      duration: 0.15,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -4,
    transition: {
      duration: 0.1,
    },
    transitionEnd: {
      display: 'none',
    },
  },
}