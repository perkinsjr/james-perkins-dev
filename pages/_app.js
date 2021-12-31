import dynamic from 'next/dynamic'
import { TinaEditProvider } from 'tinacms/dist/edit-state'
import { TinaCloudCloudinaryMediaStore } from 'next-tinacms-cloudinary'
import { ChakraProvider } from '@chakra-ui/react'

const TinaCMS = dynamic(() => import('tinacms'), { ssr: false })

const NEXT_PUBLIC_TINA_CLIENT_ID = process.env.NEXT_PUBLIC_TINA_CLIENT_ID
const NEXT_PUBLIC_USE_LOCAL_CLIENT =
  process.env.NEXT_PUBLIC_USE_LOCAL_CLIENT || true

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <TinaEditProvider
        editMode={
          <TinaCMS
            branch="main"
            clientId={NEXT_PUBLIC_TINA_CLIENT_ID}
            isLocalClient={Boolean(Number(NEXT_PUBLIC_USE_LOCAL_CLIENT))}
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
