import {
    Box,
    Flex,
    Heading,
    LinkBox,
    LinkOverlay,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'

  import Image from 'next/image'
import Link from 'next/link'

export const FeaturedPost = ({props, href}) => {
    const { title, description, image, author, category } = props
    return (
      <Link href={href}>
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
          },
        }}
      >
        
        <Flex direction="column">
        
          <Image height="180" width="100" quality={100} objectFit="cover" alt={title} src={image} />
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
              fontWeight="semibold"
              mb="2"
              color="gray.500"
            >
              {category}
            </Text>
            <Heading as="h3" size="sm" mb="2" lineHeight="base">
              <LinkOverlay href={href}>{title}</LinkOverlay>
            </Heading>
            <Text noOfLines={2} mb="8" color={mode('gray.600', 'gray.400')}>
              {description}
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
                  {author}
                </Box>
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </LinkBox>
      </Link>
    )
  }