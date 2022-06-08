import Tina from '../.tina/components/TinaDynamicProvider.js';
import { ChakraProvider } from '@chakra-ui/react';
import { Navbar } from '../components/Layout/NavBar/Navbar';
import '../utils/video-player.css';
import theme from '../utils/theme';
import Footer from '../components/Layout/Footer/footer.jsx';
const App = ({ Component, pageProps }) => {
    return (
        <ChakraProvider theme={theme}>
            <Tina>
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </Tina>
        </ChakraProvider>
    );
};

export default App;
