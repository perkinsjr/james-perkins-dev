import { staticRequest } from 'tinacms'
import { Layout } from '../../components/Layout'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import {CodeBlock} from '../../components/CodeBlock';
import { CustomLink } from '../../components/CustomLink';
import ChakraUIRenderer from "chakra-ui-markdown-renderer"
import { Box, Heading, Code} from "@chakra-ui/react";
import Image from "next/image";
export default function Slug(props) {

  const components = {
    h1: (props) =>  <Heading as="h1" fontSize="3xl" m={2} {...props} />,
    h2: (props) => <Heading as="h2" fontSize="2xl" m={2} {...props} />,
    h3: (props) => <Heading as="h3" fontSize="xl" m={2} {...props} />,
    h4: (props) => <Heading as="h4" fontSize="lg" m={2} {...props} />,
    h5: (props) => <Heading as="h5" fontSize="md" m={2} {...props} />,
    h6: (props) => <Heading as="h6" fontSize="sm" m={2} {...props} />,
    li: (props) => <Box as="li" fontSize="md" m={2} {...props} />,
    ul: (props) => <Box as="ul" fontSize="md" m={2} {...props} />,
    ol: (props) => <Box as="ol" fontSize="md" m={2} {...props} />,
    code_block: (props) => {
      return <CodeBlock language={props.lang}>{props.children}</CodeBlock>;
    },
    a: (props) => {
      return (<CustomLink href={props.href}>{props.children}</CustomLink>);
    },
    img: (props) => {
      return (<Image src={props.url} alt={props.alt} width={1920} height={1080} />);
    }

  };
  if (props.data && props.data.getPostDocument?.data) {
    return (
        <Box maxWidth="1080px" width="100%" mx="auto" mt={[2, 4]} mb={4} px={4}  >
        <article>
                    <Heading as="h1" size="3xl" textAlign="center" my={8}>
                        {props.data.getPostDocument.data.title}
                    </Heading>
          <TinaMarkdown content={props.data.getPostDocument.data.body} components={components} />
        </article>
        </Box>
    )
  }
  return (
    <Layout>
      <h1>Loading...</h1>
    </Layout>
  )

}

export const getStaticPaths = async () => {
  const tinaProps = await staticRequest({
    query: `{
        getPostList{
          edges {
            node {
              sys {
                filename
              }
            }
          }
        }
      }`,
    variables: {},
  })
  const paths = tinaProps.getPostList.edges.map((x) => {
    return { params: { slug: x.node.sys.filename } }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}
export const getStaticProps = async (ctx) => {
  const query = `query getPost($relativePath: String!) {
    getPostDocument(relativePath: $relativePath) {
      data {
        title
      	date
     	 image
      	author
      	authorTwitter
      	category
      	tags
      	description
      	body
      }
    }
  }
  `
  const variables = {
    relativePath: ctx.params.slug + '.mdx',
  }
  let data = {}
  try {
    data = await staticRequest({
      query,
      variables,
    })
  } catch (error) {
    // swallow errors related to document creation
  }

  return {
    props: {
      data,
      query,
      variables,
    },
  }
}
