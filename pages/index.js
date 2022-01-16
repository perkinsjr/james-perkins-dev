import { Layout } from '../components/Layout/Layout'
import { Hero } from '../components/Home/Hero'
import { FeaturedArticles } from "../components/Home/FeaturedArticles"
import { staticRequest } from 'tinacms';
import { Fragment } from 'react';
import { Content } from '../components/Home/Content';
export default function Home(props) {
  return (
    <Layout>
      {props.data.getPageDocument.data.blocks
        ? props.data.getPageDocument.data.blocks.map(function (block, i) {
          switch (block.__typename) {
          case "PageBlocksHero":
            return (
              <Fragment key={i + block.__typename}>
                <Hero data={block} />
              </Fragment>
            );
          case "PageBlocksFeatures":
            return (
              <Fragment key={i + block.__typename}>
                <FeaturedArticles data={block} />
              </Fragment>
            );
          case "PageBlocksContent":
            return (
              <Fragment key={i + block.__typename}>
                <Content data={block} />
              </Fragment>
            );
          default:
            return null;
          }
        })
        : null}
      {!props.data.getPageDocument.data.blocks && <h1>Loading...</h1>}
    </Layout>
  )
}

export const getStaticProps = async () => {
  const query = `query getPage($relativePath: String!) {
    getPageDocument(relativePath: $relativePath) {
      data{
        blocks{
          __typename
          ... on PageBlocksHero{
            heading
            subheading
            description
            image
          }
        ... on PageBlocksFeatures{
          items{
              image
              title
              author
              category
              description
              href
          }
        }
        ... on PageBlocksContent{
          items{
            image
            name
            description
            href
          }
        }
      }
      }
  }
}
`;

  const variables = {
    relativePath: 'home.md',
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