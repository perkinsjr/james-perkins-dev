import { extendTheme } from '@chakra-ui/react';
import { withProse } from '@nikolovlazar/chakra-ui-prose';

// 2. Add your color mode config
const config = {
    initialColorMode: 'light'
};

// 3. extend the theme
const theme = extendTheme(
    { config },
    withProse({
        baseStyle: {
            pre: {
                fontFamily: 'monospace',
                fontSize: '1rem',
                lineHeight: '1.5',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                overflow: 'auto',
                padding: '0.2rem 0.4rem',
                margin: '0.2rem 0.4rem',
                borderRadius: '0.5rem',
                border: '1px solid #ddd',
                backgroundColor: '#000000',
                border: '1px solid #ccc',
                transition: 'all 0.2s ease-in-out',
                color: '#fff'
            }
        }
    })
);

export default theme;
