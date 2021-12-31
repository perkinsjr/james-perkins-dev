import { staticRequest } from 'tinacms'
import { Layout } from '../../components/Layout'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import {CodeBlock} from '../../components/CodeBlock';
import ChakraUIRenderer from "chakra-ui-markdown-renderer"
import { Box, Heading, Code,
  Link,
} from "@chakra-ui/react";

export default function Slug(props) {
  

  const CustomLink = ({children,href}) => {
    console.log(children,href);
    return (
      <Link
        textDecoration="underline"
        fontWeight="bold"
        transition=".3s"
        pos="relative"
        fontSize="1rem"
        _hover={{
          color: "#E883ED",
          _after: {
            w: "100%",
          }
        }}
        _after={{
          content: "''",
          height: "2px",
          bgColor: "#E883ED",
          position: "absolute",
          left: "0",
          bottom: "-3px",
          transition: ".3s",
          w: "0"
        }}
        href={href}
      >
        {children}
      </Link>
    )
  }

  const custom = {
      a: CustomLink
  };
  const components = {
    code: (props) => {
      return <Code px={2} fontWeight="bold" colorScheme="purple">{props.children}</Code>;
    },
    code_block: (props) => {
      return <CodeBlock language={props.lang}>{props.children}</CodeBlock>;
    },
    a: (props) => {
      return (<Link
        textDecoration="underline"
        fontWeight="bold"
        transition=".3s"
        pos="relative"
        fontSize="1rem"
        _hover={{
          textDecoration: "none",
          color: "#E883ED",
          _after: {
            w: "100%",
          }
        }}
        _after={{
          content: "''",
          height: "2px",
          bgColor: "#E883ED",
          position: "absolute",
          left: "0",
          bottom: "-3px",
          transition: ".3s",
          w: "0"
        }}
        href={props.href}
      >
        {props.children}
      </Link>)
    }
  };
  if (props.data && props.data.getPostDocument?.data) {
    return (
        <Box maxWidth="1080px" width="100%" mx="auto" mt={[2, 4]} mb={4} px={4}  >
        <article>
                    <Heading as="h2" size="3xl" textAlign="center" my={8}>
                        {props.data.getPostDocument.data.title}
                    </Heading>
          <TinaMarkdown content={props.data.getPostDocument.data.body} components={ChakraUIRenderer(),components} />
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
