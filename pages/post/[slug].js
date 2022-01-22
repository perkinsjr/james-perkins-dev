import { staticRequest } from 'tinacms';
import { Layout } from '../../components/Layout/Layout';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { CodeBlock } from '../../components/Blog/CodeBlock';
import { CustomLink } from '../../components/Blog/CustomLink';
import {
  Box,
  Heading,
  Code,
  Text,
  chakra,
  useColorModeValue as mode,
  Divider
} from '@chakra-ui/react';
import Image from 'next/image';
import { LikeCounter } from '../../components/Blog/Lyket';
import { Seo } from '../../components/Seo';
import { Newsletter } from '../../components/Blog/Newsletter';
export default function Slug(props) {
  const components = {
    h1: props => <Heading as="h1" fontSize="6xl" my={2} {...props} />,
    h2: props => (
      <Heading
        as="h2"
        color={mode('purple.600', 'purple.300')}
        fontSize="5xl"
        my={2}
        {...props}
      />
    ),
    h3: props => (
      <Heading
        as="h3"
        color={mode('purple.600', 'purple.300')}
        fontSize="4xl"
        my={2}
        {...props}
      />
    ),
    h4: props => (
      <Heading
        as="h4"
        color={mode('purple.600', 'purple.300')}
        fontSize="3xl"
        my={2}
        {...props}
      />
    ),
    h5: props => (
      <Heading
        as="h5"
        color={mode('purple.600', 'purple.300')}
        fontSize="2xl"
        my={2}
        {...props}
      />
    ),
    h6: props => (
      <Heading
        as="h6"
        color={mode('purple.600', 'purple.300')}
        fontSize="xl"
        my={2}
        {...props}
      />
    ),
    li: props => <Box as="li" fontSize="xl" my={2} mx={4} {...props} />,
    ul: props => <Box as="ul" fontSize="xl" my={2} mx={4} {...props} />,
    ol: props => <Box as="ol" fontSize="xl" my={2} mx={4} {...props} />,
    code_block: props => {
      return <CodeBlock language={props.lang}>{props.children}</CodeBlock>;
    },
    a: props => {
      return <CustomLink href={props.href}>{props.children}</CustomLink>;
    },
    newsletter:() => {
      return <Newsletter />;
    },
    img: props => {
      const BlogImg = chakra(Image, {
        shouldForwardProp: prop =>
          ['height', 'width', 'quality', 'src', 'alt'].includes(prop)
      });
      return (
        <BlogImg
          mx="auto"
          src={props.url}
          height="500"
          width="1080"
          alt={props.alt}
          objectFit='contain'
          quality="70"
        />
      );
    },
    code: props => {
      return <Code colorScheme="purple" fontSize="xl" my={2}>{props.children}</Code>;
    },
    p: props => {
      return <Text fontSize="xl" my={2} {...props} />
    }
  };
  if (props.data && props.data.getPostDocument?.data) {
    return (
      <>
        <Seo title={props.data.getPostDocument.data.title} description={props.data.getPostDocument.data.description} image={props.data.getPostDocument.data.image} />
        <Box maxWidth="1080px" width="100%" mx="auto" mt={[2, 4]} mb={4} px={4}>
          <article>
            <Heading
              as="h1"
              color="RGB(113, 90, 255)"
              size="3xl"
              textAlign="center"
              my={8}
            >
              {props.data.getPostDocument.data.title}
            </Heading>

            <TinaMarkdown
              content={props.data.getPostDocument.data.body}
              components={components}
            />
            <Divider my={8} />
            <Box my={8}>
              <LikeCounter slug={props.variables.relativePath} />
            </Box>
            <Divider my={8} />
          </article>
        </Box>
      </>
    );
  }
  return (
    <Layout>
      <h1>Loading...</h1>
    </Layout>
  );
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
    variables: {}
  });
  const paths = tinaProps.getPostList.edges.map(x => {
    return { params: { slug: x.node.sys.filename } };
  });

  return {
    paths,
    fallback: 'blocking'
  };
};
export const getStaticProps = async ctx => {
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
  `;
  const variables = {
    relativePath: ctx.params.slug + '.mdx'
  };
  let data = {};
  try {
    data = await staticRequest({
      query,
      variables
    });
  } catch (error) {
    // swallow errors related to document creation
  }

  return {
    props: {
      data,
      query,
      variables
    }
  };
};
