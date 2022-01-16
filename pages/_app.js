import dynamic from 'next/dynamic'
import { TinaEditProvider } from 'tinacms/dist/edit-state'
import { ChakraProvider } from '@chakra-ui/react'
import {Navbar} from '../components/Layout/NavBar/Navbar'
const TinaCMS = dynamic(() => import('tinacms'), { ssr: false })

const NEXT_PUBLIC_TINA_CLIENT_ID = process.env.NEXT_PUBLIC_TINA_CLIENT_ID

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Navbar/>
      <TinaEditProvider
        editMode={
          <TinaCMS
            branch="main"
            clientId={NEXT_PUBLIC_TINA_CLIENT_ID}
            isLocalClient={false}
            mediaStore={async () => {
              const pack = await import("next-tinacms-cloudinary");
              return pack.TinaCloudCloudinaryMediaStore;
            }}
            {...pageProps}
          >
            {(livePageProps) => <Component {...livePageProps} />}
          </TinaCMS>
        }
      >
        <Component {...pageProps} />
      </TinaEditProvider>
    </ChakraProvider>
  )
}

export default App
