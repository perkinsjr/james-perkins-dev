import { staticRequest } from 'tinacms';
import { Layout } from '../../components/Layout/Layout';
import { Seo } from '../../components/Seo';
import {
    Heading,
    Text,
    VStack,
Box,
Container,
    List,
    ListItem,
  } from "@chakra-ui/react";
import {BlogPostCard} from '../../components/Blog/BlogCard';
export default function BlogPosts(props) {
    const postsList = props.getPostList.edges;
    const sortedPosts = postsList.sort((a, b) => {
        return new Date(b.node.data.date) - new Date(a.node.data.date);
    });
    return (
        <Layout>
            <Seo
                title="Blog Posts | James Perkins"
                description="All Blog Posts"
                image="https://res.cloudinary.com/dub20ptvt/image/upload/v1642782664/sgbjmezsorrnhqtwnibg.png"
            />
            <Box maxWidth="1080px" width="100%" mx="auto" mt={[2, 4]} mb={4} px={4}>  
            <Container>          
            <VStack as="section" w="full" spacing={6} mb={4}>
           
            <Heading as="h1" textAlign="center" fontSize="3xl" m={2}>
                    All Posts
                </Heading>
        <Text textAlign="center" fontSize="md" mb={[4,2]}>
          I’ve written a
          total of {sortedPosts.length} articles.
        </Text>
      </VStack>
      <List w="full" spacing={4}>
        {sortedPosts.map((post) => (
          <ListItem key={post.node.sys.filename}>
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
    const tinaProps = await staticRequest({
        query: `{
      getPostList{
        edges {
          node {
            id
            data{
              title
              date
              description
              author
              authorTwitter
              category
              image
            }
            sys {
              filename
            }
          }
        }
      }
    }`,
        variables: {}
    });

    return {
        props: {
            ...tinaProps
        }
    };
};
