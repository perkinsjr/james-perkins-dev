import { staticRequest } from 'tinacms'
import { Layout } from '../../components/Layout/Layout'
import { FeaturedPost } from '../../components/Blog/FeaturedPost/FeaturedPost'
import {Heading, SimpleGrid, Box} from "@chakra-ui/react"
export default function BlogPosts(props) {
  const postsList = props.getPostList.edges
  return (
    <Layout>
      <Box maxWidth="1080px" width="100%" mx="auto" mt={[2, 4]} mb={4} px={4}>
      <Heading as="h1" textAlign="center" fontSize="3xl" m={2}>All Posts</Heading>
      <SimpleGrid columns={[1, null, 3]} spacing='40px' mt={4}>
        {postsList.map((post) => (
          <FeaturedPost key={post.node.id} href={`/post/${post.node.sys.filename}`} props={post.node.data} />
        ))}
      </SimpleGrid>
      </Box>
    </Layout>
  )
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
    variables: {},
  })

  return {
    props: {
      ...tinaProps,
    },
  }
}
