import { Layout } from '../components/Layout/Layout';
import { Hero } from '../components/Home/Hero';
import { FeaturedArticles } from '../components/Home/FeaturedArticles';
import { staticRequest } from 'tinacms';
import { Fragment } from 'react';
import { Content } from '../components/Home/Content';
import { Seo } from '../components/Seo';
import { useTina } from 'tinacms/dist/edit-state';
import FeaturedVideos from '../components/Home/FeaturedVideos';

const query = `query {
    getPageDocument(relativePath: "home.md") {
      data {
        blocks {
          __typename
          ... on PageBlocksHero {
            heading
            subheading
            description
            image
          }
          ... on PageBlocksFeatures {
            items {
              article {
                  ... on PostDocument{
                  data{
                    title
                    date
                    description
                  }
                    sys{
                      filename
                    }
                  }
              }
                  }
            }
          ... on PageBlocksContent {
            items {
              image
              name
              description
              href
            }
          }
          ... on PageBlocksVideo {
              items{
                  title
                  description
                  url
              }
          }
        }
      }
    }
  }
`;

export default function Home(props) {
    const { data } = useTina({
        query,
        variables: {},
        data: props.data
    });
    return (
        <Layout>
            <Seo
                title="Home | James Perkins"
                description="Home page for James Perkins"
                image="https://res.cloudinary.com/dub20ptvt/image/upload/v1642782664/sgbjmezsorrnhqtwnibg.png"
            />
            {data?.getPageDocument?.data?.blocks
                ? data?.getPageDocument?.data?.blocks.map(function (block, i) {
                      switch (block.__typename) {
                          case 'PageBlocksHero':
                              return (
                                  <Fragment key={i + block.__typename}>
                                      <Hero data={block} />
                                  </Fragment>
                              );
                          case 'PageBlocksFeatures':
                              return (
                                  <Fragment key={i + block.__typename}>
                                      <FeaturedArticles data={block} />
                                  </Fragment>
                              );
                          case 'PageBlocksContent':
                              return (
                                  <Fragment key={i + block.__typename}>
                                      <Content data={block} />
                                  </Fragment>
                              );
                          case 'PageBlocksVideo':
                              return (
                                  <Fragment key={i + block.__typename}>
                                      <FeaturedVideos videos={block} />
                                  </Fragment>
                              );
                          default:
                              return null;
                      }
                  })
                : null}
            {!data?.getPageDocument.data.blocks && <h1>Loading...</h1>}
        </Layout>
    );
}

export const getStaticProps = async () => {
    const variables = {};
    let data = null;
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
