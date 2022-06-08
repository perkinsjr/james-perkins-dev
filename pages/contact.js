import { ContactMe } from '../components/Contact/ContactMe';
import { Layout } from '../components/Layout/Layout';
import { Seo } from '../components/Seo';

export default function ContactPage() {
    return (
        <Layout>
            <Seo
                title="Contact Me | James Perkins"
                description="Contact page for James Perkins"
                image="https://res.cloudinary.com/dub20ptvt/image/upload/v1642782664/sgbjmezsorrnhqtwnibg.png"
            />

            <ContactMe />
        </Layout>
    );
}
