import Tina from '../.tina/components/TinaDynamicProvider.js';
import { ChakraProvider } from '@chakra-ui/react';
import { Navbar } from '../components/Layout/NavBar/Navbar';
import { Provider as LyketProvider } from '@lyket/react';
import '../utils/video-player.css';
const App = ({ Component, pageProps }) => {
    return (
        <LyketProvider apiKey="pt_41d26ed25c9eb2b7ee6b066efa3427">
            <ChakraProvider>
                <Tina>
                    <Navbar />
                    <Component {...pageProps} />
                </Tina>
            </ChakraProvider>
        </LyketProvider>
    );
};

export default App;
