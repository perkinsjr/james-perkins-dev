import {
  Box,
  Flex,
  Heading,
  LinkBox,
  Link,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
  chakra
} from '@chakra-ui/react'
import Image from 'next/image';
import { ArrowForwardIcon } from '@chakra-ui/icons'
export const FeaturedArticles = ({ data }) => {
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
        <Heading color="RGB(113, 90, 255)" size="xl" mb="8" fontWeight="extrabold">
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
            const link = `/post/${feature.href}`
            return (
              <Link href={link} key={feature.href} style={{textDecoration: 'inherit'}}>
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

                    {feature?.image && <FeaturedImage height="200" width="250" quality={100} objectFit="cover" alt={feature?.title} src={feature?.image} />}
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
                        color={mode('gray.800', 'gray.400')}
                        fontWeight="semibold"
                        mb="2"
                        textDecoration="none"
                      >
                        {feature?.category}
                      </Text>
                      <Heading as="h3" size="sm" mb="2" lineHeight="base">
                        <Text>{feature?.title}</Text>
                      </Heading>
                      <Text noOfLines={2} mb="8" color={mode('gray.600', 'gray.400')}>
                        {feature?.description}
                      </Text>

                      <Flex
                        align="baseline"
                        justify="space-between"
                        fontSize="sm"
                        color={mode('gray.600', 'gray.400')}
                      >
                        <Text>
                                                    By{' '}
                          <Box textDecor="underline">
                            {feature?.author}
                          </Box>
                        </Text>
                      </Flex>
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
