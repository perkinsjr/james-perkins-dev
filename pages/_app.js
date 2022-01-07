import dynamic from 'next/dynamic'
import { TinaEditProvider } from 'tinacms/dist/edit-state'
import { TinaCloudCloudinaryMediaStore } from 'next-tinacms-cloudinary'
import { ChakraProvider } from '@chakra-ui/react'
import {Navbar} from '../components/layout/NavBar/Navbar'
import theme from "../utils/theme"
const TinaCMS = dynamic(() => import('tinacms'), { ssr: false })

const NEXT_PUBLIC_TINA_CLIENT_ID = process.env.NEXT_PUBLIC_TINA_CLIENT_ID
const NEXT_PUBLIC_USE_LOCAL_CLIENT =
  process.env.NEXT_PUBLIC_USE_LOCAL_CLIENT || true

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Navbar/>
      <TinaEditProvider
        editMode={
          <TinaCMS
            branch="main"
            clientId={NEXT_PUBLIC_TINA_CLIENT_ID}
            isLocalClient={true}
            mediaStore={TinaCloudCloudinaryMediaStore}
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
