import { Layout } from '../components/Layout'
import { Hero } from '../components/Layout/Hero'
import {FeaturedArticles} from "../components/Layout/FeaturedPost/FeaturedArticles"
export default function Home() {
  return (    
    <Layout>
      <Hero title="James Perkins" subheading="Developer Advocate" image="http://res.cloudinary.com/dub20ptvt/image/upload/v1627759692/me-and-tina_hgq79d.jpg" description="Helping Developers understand the Jamstack, and how it can be used to build a faster web." />
      <FeaturedArticles features={props.featureList} />
    </Layout>
  )
}