import { staticRequest } from 'tinacms';
import { Layout } from '../../components/Layout/Layout';
import { Seo } from '../../components/Seo';
import { FeaturedPost } from '../../components/Blog/FeaturedPost/FeaturedPost';
import { Heading, SimpleGrid, Box } from '@chakra-ui/react';
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
                <Heading as="h1" textAlign="center" fontSize="3xl" m={2}>
                    All Posts
                </Heading>
                <SimpleGrid columns={[1, null, 3]} spacing="40px" mt={4}>
                    {sortedPosts.map((post) => (
                        <FeaturedPost
                            key={post.node.id}
                            href={`/post/${post.node.sys.filename}`}
                            props={post.node.data}
                        />
                    ))}
                </SimpleGrid>
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
