import { extendTheme } from '@chakra-ui/react';
import { withProse } from '@nikolovlazar/chakra-ui-prose';

// 2. Add your color mode config
const config = {
    initialColorMode: 'system',
    useSystemColorMode: true
};

// 3. extend the theme
const theme = extendTheme(
    { config },
    withProse({
        baseStyle: {
            p: {
                fontSize: '1.125rem',
                lineHeight: '1.5'
            },
            a: {
                color: '#483d8b',
                fontWeight: 'bold',
                textDecoration: 'underline'
            },
            code: {
                bgColor: 'purple.500',
                padding: '0.25rem',
                fontSize: '1.125rem',
                borderRadius: '0.25rem',
                fontWeight: 'normal',
                color: 'white',
                '&::before, &::after': {
                    content: '""'
                }
            }
        }
    })
);

export default theme;
