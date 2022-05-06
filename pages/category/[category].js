import { staticRequest } from 'tinacms';
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
export default function BlogPostsPerCategory(props) {
    const postsList = props.postConnection.edges;
    const sortedPosts = postsList.sort((a, b) => {
        return new Date(b.node.date) - new Date(a.node.date);
    });
    const [displayPosts, setDisplayPosts] = useState(sortedPosts);

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
                title="Blog Posts By Category | James Perkins"
                description="Blog Posts By Category"
                image="https://res.cloudinary.com/dub20ptvt/image/upload/v1642782664/sgbjmezsorrnhqtwnibg.png"
            />

            <Box maxWidth="1080px" width="100%" mx="auto" mt={[2, 4]} mb={4} px={4}>
                <CarbonAd name={'carbon-index-upper'} />
                <Container>
                    <VStack as="section" w="full" spacing={6} mb={4}>
                        <Heading as="h1" textAlign="center" fontSize="3xl" m={2}>
                            All Posts by Category: {props.category}
                        </Heading>
                        <Text textAlign="center" fontSize="md" mb={[4, 2]}>
                            I&apos;ve written a total of {sortedPosts.length} articles.
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

export const getStaticPaths = async () => {
    const tinaProps = await staticRequest({
        query: `{ categoryConnection{
            edges{
            node{
               title
              _sys {
                filename
              }
            }
          }
        }
      }`,
        variables: {}
    });
    const paths = tinaProps.categoryConnection.edges.map((x) => {
        return { params: { category: x.node.title } };
    });

    return {
        paths,
        fallback: 'blocking'
    };
};

export const getStaticProps = async (ctx) => {
    const category = ctx.params.category;
    const tinaProps = await staticRequest({
        query: `query getPostsByCategory($category: String){
            postConnection(filter: {categories:{category: {category:{title: {eq:$category}}}}}){
              edges{
                node{
                  id
                  description
                  title
                  date
                  _sys{
                     filename
                  }
                }
              }
            }
          }`,
        variables: {category: category}
    });
    return {
        props: {
            ...tinaProps
        }
    };
};
