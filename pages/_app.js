import Tina from '../.tina/components/TinaDynamicProvider.js';
import Script from 'next/script.js';
import { ChakraProvider } from '@chakra-ui/react';
import { Navbar } from '../components/Layout/NavBar/Navbar';
import '../utils/video-player.css';
import theme from '../utils/theme';
import Footer from '../components/Layout/Footer/footer.jsx';
const App = ({ Component, pageProps }) => {
    return (
        <ChakraProvider theme={theme}>
            <Script
                src="https://plausible.io/js/plausible.js"
                strategy="worker"
                data-domain="jamesperkins.dev"
            />
            <Tina>
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </Tina>
        </ChakraProvider>
    );
};

export default App;
