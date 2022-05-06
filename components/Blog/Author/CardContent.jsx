import { Box } from '@chakra-ui/react'
import * as React from 'react'

export const CardContent = (props) => (
  <Box
    textAlign={{
      sm: 'center',
    }}
    pt="2"
    {...props}
  />
)