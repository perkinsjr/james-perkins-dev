import {
  Box,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
  chakra
} from '@chakra-ui/react'

import Image from 'next/image'

export const Hero = ({data}) => {
  const CoverImg = chakra(Image, {
    shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
  })
  const { heading, subheading, description, image } = data;
  return(
    <Box as="section" bg={mode('white', 'gray.800')} pt={{base:"0", md: "2", lg: "16"}} pb="24">
      <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: '3rem', lg: '2rem' }}
          mt="8"
          align={{ lg: 'center' }}
          justify="space-between"
        >
          <Box flex="1" maxW={{ lg: '520px' }}>
            <Heading
              as="h1"
              size="3xl"
              color={mode('purple.600', 'purple.300')}
              mt="8"
              fontWeight="extrabold"
              letterSpacing="tight"
            >
              {heading}
            </Heading>
            <Text color={mode('gray.600', 'white')} fontSize="sm" fontWeight="light">{subheading}</Text>
            <Text color={mode('gray.600', 'white')} mt="4" fontSize="lg" fontWeight="medium">
              {description}
            </Text>
          </Box>
          <Box pos="relative" w={{ base: 'full',md:'560px', lg: '560px' }} h={{ base: 'auto', md:'360px', lg: '360px' }}>
            <Box >
              <CoverImg
                zIndex={1}
                width="560px"
                height="360px"
                quality={100}
                pos="relative"
                objectFit="cover"
                src={image}
                alt={heading}
              />
            </Box>
            <Box
              pos="absolute"
              w="100%"
              h="100%"
              top="-4"
              left="-4"
              bg={mode('gray.200', 'gray.700')}
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  )



}