import {
    Box,
    Heading,
    Img,
    Stack,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'



 export const Hero = (props) => {
    const { title, subtitle, description, image } = props;
    return(
<Box as="section" bg={mode('gray.50', 'gray.800')} pt="16" pb="24">
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
              {title}
            </Heading>
            <Text color={mode('gray.600', 'gray.400')} fontSize="sm" fontWeight="light">{subtitle}</Text>
            <Text color={mode('gray.600', 'gray.400')} mt="4" fontSize="lg" fontWeight="medium">
              {description}
            </Text>
          </Box>
          <Box pos="relative" w={{ base: 'full', lg: '560px' }} h={{ base: 'auto', lg: '360px' }}>
            <Img
              w="full"
              pos="relative"
              zIndex="1"
              h={{ lg: '100%' }}
              objectFit="cover"
              src={image}
              alt={title}
            />
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