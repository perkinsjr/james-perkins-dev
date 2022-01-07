import {
    Box,
    Flex,
    Heading,
    Img,
    LinkBox,
    Link,
    LinkOverlay,
    SimpleGrid,
    Text,
    useColorModeValue as mode,
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

import Image from 'next/image'
export const FeaturedArticles = ({ features }) => {
    console.log(features);
    return (
        <Box
            as="section"
            bg={mode('gray.50', 'gray.800')}
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
                <Heading size="xl" mb="8" fontWeight="extrabold">
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
                    {features?.map((feature) => {
                        const link = `/post/${feature.href}`
                        return (
                            <Link href={link}>
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

                                        <Img height="180" width="100" quality={100} objectFit="cover" alt={feature.title} src={feature.image} />
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
                                                {feature.category}
                                            </Text>
                                            <Heading as="h3" size="sm" mb="2" lineHeight="base">
                                                <LinkOverlay href={feature.href}>{feature.title}</LinkOverlay>
                                            </Heading>
                                            <Text noOfLines={2} mb="8" color={mode('gray.600', 'gray.400')}>
                                                {feature.description}
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
                                                        {feature.author}
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
                <Link fontSize="xl" fontWeight="bold" color={mode('purple.600', 'purple.400')}>
                    <span>View all articles</span>
                    <Box as={ArrowForwardIcon} display="inline-block" ms="2" />
                </Link>
            </Box>
        </Box>
    )
}