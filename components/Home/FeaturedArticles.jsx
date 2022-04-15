import { Box, Heading, List, ListItem, Link, useColorModeValue as mode } from '@chakra-ui/react';

import { ArrowForwardIcon } from '@chakra-ui/icons';
import { BlogPostCard } from '../Blog/BlogCard';

export const FeaturedArticles = ({ data }) => {
    return (
        <Box
            as="section"
            bg={mode('white', 'gray.800')}
            py={{
                base: '10',
                sm: '10'
            }}
        >
            <Box
                maxW={{
                    base: 'xl',
                    md: '7xl'
                }}
                mx="auto"
                px={{
                    base: '6',
                    md: '8'
                }}
            >
                <Heading color="purple.400" size="xl" mb="8" fontWeight="extrabold">
                    Featured Articles
                </Heading>
                <List w="full" spacing={4} mb={4}>
                    {data.items?.map((feature) => {
                        return (
                            <ListItem key={feature.article.sys.filename} my={{ base: 0, sm: 4 }}>
                                <BlogPostCard {...feature.article} />
                            </ListItem>
                        );
                    })}
                </List>
                <Link
                    href="/post"
                    fontSize="xl"
                    fontWeight="bold"
                    color={mode('purple.600', 'purple.400')}
                >
                    <span>View all articles</span>
                    <Box as={ArrowForwardIcon} display="inline-block" ms="2" />
                </Link>
            </Box>
        </Box>
    );
};
