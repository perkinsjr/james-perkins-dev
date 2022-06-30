import { useState } from 'react';
import { Layout } from '../../components/Layout/Layout';
import { Seo } from '../../components/Seo';
import {
    Heading,
    InputGroup,
    Input,
    InputLeftElement,
    Text,
    Icon,
    VStack,
    Box,
    Container,
    List,
    ListItem
} from '@chakra-ui/react';
import { HiOutlineSearch } from 'react-icons/hi';
import { BlogPostCard } from '../../components/Blog/BlogCard';
import { CarbonAd } from '../../components/Blog/CarbonAd';
import { ExperimentalGetTinaClient } from '../../.tina/__generated__/types.ts';
export default function BlogPosts(props) {
    const postsList = props.data.postConnection.edges;

    const [displayPosts, setDisplayPosts] = useState(postsList);

    const onSearch = (event) => {
        const query = event.currentTarget.value;
        const filteredPosts = postsList.filter((post) => {
            return post.node.description?.toLowerCase().includes(query.toLowerCase());
        });
        setDisplayPosts(filteredPosts);
    };

    return (
        <Layout>
            <Seo
                title="Blog Posts | James Perkins"
                description="All Blog Posts"
                image="https://res.cloudinary.com/dub20ptvt/image/upload/v1642782664/sgbjmezsorrnhqtwnibg.png"
            />

            <Box maxWidth="1080px" width="100%" mx="auto" mt={[2, 4]} mb={4} px={4}>
                <CarbonAd name={'carbon-index-upper'} />
                <Container>
                    <VStack as="section" w="full" spacing={6} mb={4}>
                        <Heading as="h1" textAlign="center" fontSize="3xl" m={2}>
                            All Posts
                        </Heading>
                        <Text textAlign="center" fontSize="md" mb={[4, 2]}>
                            I&apos;ve written a total of {displayPosts.length} articles.
                        </Text>
                        <InputGroup>
                            <InputLeftElement pointerEvents="none">
                                <Icon as={HiOutlineSearch} color="gray.400" />
                            </InputLeftElement>
                            <Input
                                onChange={onSearch}
                                placeholder="Search blog posts"
                                variant="filled"
                            />
                        </InputGroup>
                    </VStack>
                    <List w="full" spacing={4}>
                        {displayPosts.map((post) => (
                            <ListItem key={post.node._sys.filename}>
                                <BlogPostCard {...post.node} />
                            </ListItem>
                        ))}
                    </List>
                </Container>
            </Box>
        </Layout>
    );
}

export const getStaticProps = async () => {
    const client = ExperimentalGetTinaClient();
    const tinaProps = await client.postConnection({ first: 1000 });

    return {
        props: {
            ...tinaProps
        }
    };
};
