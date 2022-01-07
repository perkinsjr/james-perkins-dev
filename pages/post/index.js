import { getStaticPropsForTina } from 'tinacms'
import { Layout } from '../../components/Layout'
import { FeaturedPost } from '../../components/Layout/FeaturedPost/FeaturedPost'
import {Heading, SimpleGrid, Box} from "@chakra-ui/react"
export default function Home(props) {
  const postsList = props.data.getPostList.edges
  return (
    <Layout>
      <Box maxWidth="1080px" width="100%" mx="auto" mt={[2, 4]} mb={4} px={4}>
      <Heading as="h1" textAlign="center" fontSize="3xl" m={2}>All Posts</Heading>
      <SimpleGrid columns={[1, null, 3]} spacing='40px'>
        {postsList.map((post) => (
          <FeaturedPost key={post.node.id} href={`/post/${post.node.sys.filename}`} props={post.node.data} />
        ))}
      </SimpleGrid>
      </Box>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const tinaProps = await getStaticPropsForTina({
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
