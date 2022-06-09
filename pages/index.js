import { Layout } from '../components/Layout/Layout';
import { Hero } from '../components/Home/Hero';
import { FeaturedArticles } from '../components/Home/FeaturedArticles';
import { staticRequest } from 'tinacms';
import { Fragment } from 'react';
import { Content } from '../components/Home/Content';
import { Seo } from '../components/Seo';
import { useTina } from 'tinacms/dist/edit-state';
import FeaturedVideos from '../components/Home/FeaturedVideos';
import { ExperimentalGetTinaClient } from '../.tina/__generated__/types.ts';

export default function Home(props) {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data
    });
    console.log(data.page.blocks[2].items[0].article);
    return (
        <Layout>
            <Seo
                title="Home | James Perkins"
                description="Home page for James Perkins"
                image="https://res.cloudinary.com/dub20ptvt/image/upload/v1642782664/sgbjmezsorrnhqtwnibg.png"
            />
            {data?.page?.blocks
                ? data?.page?.blocks.map(function (block, i) {
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
            {!data?.page.blocks && <h1>Loading...</h1>}
        </Layout>
    );
}

export const getStaticProps = async () => {
    const client = ExperimentalGetTinaClient();
    const data = await client.PageQuery({ relativePath: 'home.md' });
    return {
        props: {
            ...data
        }
    };
};
