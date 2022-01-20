import { Box, Flex, Img,Heading, Text, SimpleGrid, useColorModeValue as mode, Link } from '@chakra-ui/react'

export const Content = ({data}) => {
  return (
    <Box
      as="section"
      bg={mode('gray.200', 'gray.400')}
      py={{
        base: '10',
        sm: '10',
      }}
    >
      <Box
        maxW={{
          base: 'xl',
          md: '7xl',
        }}
        mx="auto"
      >
        <Box flex="1" maxW={{ lg: '5xl' }} mb={12} mx="auto">
          <Heading
            as="h1"
            size="xl"
            color={mode('purple.600', 'purple.700')}
            mt="8"
            textAlign="center"
            fontWeight="extrabold"
          >
                        James provides educational and entertaining content for developers.
          </Heading>
          <Text textAlign="center" color={mode('gray.600', 'gray.900')} mt="4" fontSize="lg" fontWeight="medium">
                        James teaches web development with a focus on JavaScript and the Jamstack. He specializes in video content, live coding and simplifying topics into relatable content.
          </Text>
        </Box>
        <SimpleGrid
          spacing="14"
          columns={{
            base: 1,
            lg: 3,
          }}
          mx={4}
        >
          {data.items?.map((item) => {
            return (
              <Link key={item?.href} href={item?.href} style={{textDecoration: 'inherit'}}>
                <Box
                  as="blockquote"
                  rounded="2xl"
                  bg={mode('white', 'gray.700')}
                  color={mode('gray.800', 'white')}
                  shadow="lg"
                  px="10"
                  py="8"
                  mx={{ base: '2', lg: 0 }}
                >
                  <Flex mb="6">
                    <Img
                      mt="-12"
                      bg={mode('white', 'gray.700')}
                      objectFit="cover"
                      w="24"
                      h="24"
                      rounded="full"
                      color={mode('white', 'gray.700')}
                      shadow="0 0 0 10px currentColor"
                      src={item?.image}
                      alt={item?.name}
                    />
                    <Box marginStart="5">
                      <Text as="cite" fontStyle="normal" fontSize="md" fontWeight="extrabold">
                        {item?.name}
                      </Text>
                    </Box>
                  </Flex>
                  <Text color={mode('gray.600', 'gray.400')}>{item?.description}</Text>
                </Box></Link>
            )
          })}
        </SimpleGrid>
      </Box>
    </Box>

  )
}