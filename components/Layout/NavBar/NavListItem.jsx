import { chakra } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import * as React from 'react'

export const MotionListItem = motion(chakra.li)
export const NavListItem = (props) => <MotionListItem variants={variants} {...props} />
const variants = {
  exit: {
    opacity: 0,
    y: 4,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
}