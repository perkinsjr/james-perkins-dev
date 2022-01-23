import dynamic from 'next/dynamic';
import { TinaEditProvider } from 'tinacms/dist/edit-state';
import { ChakraProvider } from '@chakra-ui/react';
import { Navbar } from '../components/Layout/NavBar/Navbar';
import { Provider as LyketProvider } from '@lyket/react';
import "../utils/video-player.css";
const TinaCMS = dynamic(() => import('tinacms'), { ssr: false });

const NEXT_PUBLIC_TINA_CLIENT_ID = process.env.NEXT_PUBLIC_TINA_CLIENT_ID;

const App = ({ Component, pageProps }) => {
  return (
    <LyketProvider apiKey="pt_41d26ed25c9eb2b7ee6b066efa3427">
      <ChakraProvider>
        <Navbar />
        <TinaEditProvider
          editMode={
            <TinaCMS
              branch="main"
              clientId={NEXT_PUBLIC_TINA_CLIENT_ID}
              isLocalClient={true}
              mediaStore={async () => {
                const pack = await import('next-tinacms-cloudinary');
                return pack.TinaCloudCloudinaryMediaStore;
              }}
              cmsCallback={(cms) => {
                /**
                 * Enables experimental branch switcher
                 */
                cms.flags.set("branch-switcher", true);
  
                /**
                 * Enables `tina-admin` specific features in the Tina Sidebar
                 */
                cms.flags.set("tina-admin", false);
              }}
              documentCreatorCallback={{
                /**
                 * After a new document is created, redirect to its location
                 */
                onNewDocument: ({ collection: { slug }, breadcrumbs }) => {
                  const relativeUrl = `/${slug}/${breadcrumbs.join("/")}`;
                  return (window.location.href = relativeUrl);
                },
                /**
                 * Only allows documents to be created to the `Blog Posts` Collection
                 */
                filterCollections: (options) => {
                  return options.filter(
                    (option) => option.label === "Blog Posts"
                  );
                },
              }}
              {...pageProps}
            >
              {livePageProps => <Component {...livePageProps} />}
            </TinaCMS>
          }
        >
          <Component {...pageProps} />
        </TinaEditProvider>
      </ChakraProvider>
    </LyketProvider>
  );
};

export default App;
