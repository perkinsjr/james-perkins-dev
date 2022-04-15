import { staticRequest } from 'tinacms';
import { Layout } from '../../components/Layout/Layout';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { CustomLink } from '../../components/Blog/CustomLink';
import { Box, Heading, chakra, Container } from '@chakra-ui/react';
import Image from 'next/image';
import { LikeCounter } from '../../components/Blog/Lyket';
import { Seo } from '../../components/Seo';
import { Newsletter } from '../../components/Blog/Newsletter';
import { VideoPlayer } from '../../components/Blog/VideoPlayer';
import { CodeBlock } from '../../components/Blog/CustomCodeBlock';
import { useTina } from 'tinacms/dist/edit-state';
import { Prose } from '@nikolovlazar/chakra-ui-prose';
import Head from 'next/head';
import FourOhFour from '../404';

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

export default function Slug(props) {
    const { data } = useTina({
        query,
        variables: props.variables,
        data: props.data
    });

    const components = {
        a: (props) => {
            return <CustomLink href={props.href}>{props.children}</CustomLink>;
        },
        newsletter: () => {
            return <Newsletter />;
        },
        youtube: (props) => {
            return <VideoPlayer url={props.url} />;
        },
        code_block: (props) => {
            return <CodeBlock language={props.lang}>{props.children}</CodeBlock>;
        },
        img: (props) => {
            const BlogImg = chakra(Image, {
                shouldForwardProp: (prop) =>
                    ['height', 'width', 'quality', 'src', 'alt'].includes(prop)
            });
            return (
                <BlogImg
                    mx="auto"
                    src={props.url}
                    height="500"
                    width="1080"
                    alt={props.alt}
                    objectFit="contain"
                    quality="70"
                />
            );
        }
    };
    if (data && data.getPostDocument?.data) {
        return (
            <>
                <Seo
                    title={data.getPostDocument.data.title}
                    description={data.getPostDocument.data.description}
                    image={data.getPostDocument.data.image}
                />
                <Head>
                    <script
                        async
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7749176258283680"
                        crossOrigin="anonymous"
                    ></script>
                </Head>
                <Box maxWidth="1100px" width="100%" mx="auto" mt={[2, 4]} mb={4} px={4}>
                    <article>
                        <Container maxW="container.md">
                            <Prose>
                                <Heading as="h1" textAlign="center" my={8}>
                                    {data.getPostDocument.data.title}
                                </Heading>
                                <TinaMarkdown
                                    content={data.getPostDocument.data.body}
                                    components={components}
                                />
                                <Box>
                                    <LikeCounter slug={props.variables.relativePath} />
                                </Box>
                            </Prose>
                        </Container>
                    </article>
                </Box>
            </>
        );
    }
    if (props.notFound && props.notFound === true) {
        return <FourOhFour />;
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
    const paths = tinaProps.getPostList.edges.map((x) => {
        return { params: { slug: x.node.sys.filename } };
    });

    return {
        paths,
        fallback: 'blocking'
    };
};
export const getStaticProps = async (ctx) => {
    const variables = {
        relativePath: ctx.params.slug + '.mdx'
    };
    let data;
    let error = false;
    try {
        data = await staticRequest({
            query,
            variables
        });
    } catch (error) {
        error = true;
        // gulp them
    }

    if (!data) {
        error = true;
    }

    if (error) {
        const tinaToken = process.env.TINA_READ_TOKEN;
        const branch = 'main';
        data = await fetch(
            `https://content.tinajs.io/content/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/github/${branch}`,
            {
                method: 'POST',
                body: JSON.stringify({ query, variables }),
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': tinaToken
                }
            }
        );
        if (!data) {
            return {
                notFound: true
            };
        }
    }
    return {
        props: {
            data,
            query,
            variables
        }
    };
};
