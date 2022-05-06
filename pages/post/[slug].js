import { staticRequest } from 'tinacms';
import { Layout } from '../../components/Layout/Layout';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { CustomLink } from '../../components/Blog/CustomLink';
import { Box, Heading, chakra, Container } from '@chakra-ui/react';
import Image from 'next/image';
import { Seo } from '../../components/Seo';
import { Newsletter } from '../../components/Blog/Newsletter';
import { VideoPlayer } from '../../components/Blog/VideoPlayer';
import { CodeBlock } from '../../components/Blog/CustomCodeBlock';
import { useTina } from 'tinacms/dist/edit-state';
import { Prose } from '@nikolovlazar/chakra-ui-prose';
import FourOhFour from '../404';
import { JamComments } from '@jam-comments/next';
import { CarbonAd } from '../../components/Blog/CarbonAd';
const query = `query getPost($relativePath: String!) {
  post(relativePath: $relativePath) {
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
        carbon: () => {
            return <CarbonAd />;
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
    if (data && data.post) {
        return (
            <>
                <Seo
                    title={data.post.title}
                    description={data.post.description}
                    image={data.post.image}
                />
                <Box maxWidth="1100px" width="100%" mx="auto" mt={[2, 4]} mb={4} px={4}>
                    <article>
                        <Container maxW="container.md">
                            <Prose>
                                <Heading as="h1" textAlign="center" my={8}>
                                    {data.post.title}
                                </Heading>
                                <CarbonAd name={'carbon-slug-lower'} />
                                <TinaMarkdown
                                    content={data.post.body}
                                    components={components}
                                />

                                <JamComments
                                    comments={props.comments}
                                    domain={props.jamCommentsDomain}
                                    apiKey={props.jamCommentsApiKey}
                                />
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
        query: `{ postConnection{
            edges{
            node{
              _sys {
                filename
              }
            }
          }
        }
      }`,
        variables: {}
    });
    const paths = tinaProps.postConnection.edges.map((x) => {
        return { params: { slug: x.node._sys.filename } };
    });

    return {
        paths,
        fallback: 'blocking'
    };
};
export const getStaticProps = async (ctx) => {
    const { fetchByPath } = require('@jam-comments/next');

    const variables = {
        relativePath: ctx.params.slug + '.mdx'
    };

    // Retrieve all comments already made on this post.
    const comments = await fetchByPath({
        domain: process.env.JAM_COMMENTS_DOMAIN,
        apiKey: process.env.JAM_COMMENTS_API_KEY,
        path: `/post/${ctx.params.slug}`
    });
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
            variables,
            jamCommentsApiKey: process.env.JAM_COMMENTS_API_KEY,
            jamCommentsDomain: process.env.JAM_COMMENTS_DOMAIN,
            comments
        }
    };
};
