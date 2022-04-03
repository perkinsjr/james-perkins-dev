import {
  Box,
  Flex,
  Heading,
  LinkBox,
  Link,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
  chakra,
} from '@chakra-ui/react'
import Image from 'next/image';
import { ArrowForwardIcon } from '@chakra-ui/icons'
export const FeaturedArticles = ({ data }) => {
  console.log(data)
  const FeaturedImage = chakra(Image, {
    shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
  })
  return (
    <Box
      as="section"
      bg={mode('white', 'gray.800')}
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
        px={{
          base: '6',
          md: '8',
        }}
      >
        <Heading color="purple.400" size="xl" mb="8" fontWeight="extrabold">
                    Featured Articles
        </Heading>
        <SimpleGrid
          columns={{
            base: 1,
            lg: 3,
          }}
          spacing="12"
          mb="10"
        >
          {data.items?.map((feature) => {
            const link = `/post/${feature?.article?.sys?.filename}`
            return (
              <Link href={link} key={feature?.article?.sys?.filename} style={{textDecoration: 'inherit'}}>
                <LinkBox
                  as="article"
                  bg={{
                    sm: mode('white', 'gray.700'),
                  }}
                  shadow={{
                    sm: 'base',
                  }}
                  rounded={{
                    sm: 'md',
                  }}
                  overflow="hidden"
                  transition="all 0.2s"
                  _hover={{
                    shadow: {
                      sm: 'lg',
                      lg: "dark-lg"
                    },
                  }}
                >

                  <Flex direction="column">

                    {feature?.article?.data?.image && <FeaturedImage height="200" width="250" quality={100} layout="fill"
                objectFit="cover" alt={feature.article?.data?.title} src={feature.article?.data?.image} />}
                    <Flex
                      direction="column"
                      px={{
                        sm: '6',
                      }}
                      py="5"
                    >
                      <Text
                        casing="uppercase"
                        letterSpacing="wider"
                        fontSize="xs"
                        color={mode('gray.800', 'gray.200')}
                        fontWeight="semibold"
                        mb="2"
                        textDecoration="none"
                      >
                        {feature.article?.data?.category}
                      </Text>
                      <Heading as="h3" size="sm" mb="2" lineHeight="base">
                        <Text>{feature.article?.data?.title}</Text>
                      </Heading>
                      <Text noOfLines={2} mb="8" color={mode('gray.600', 'gray.50')}>
                        {feature.article?.data?.description}
                      </Text>
                    </Flex>
                  </Flex>
                </LinkBox>
              </Link>
            )
          })}

        </SimpleGrid>
        <Link href='/post' fontSize="xl" fontWeight="bold" color={mode('purple.600', 'purple.400')}>
          <span>View all articles</span>
          <Box as={ArrowForwardIcon} display="inline-block" ms="2" />
        </Link>
      </Box>
    </Box>
  )
}
