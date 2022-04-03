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
            code: {
                bgColor: 'purple.500',
                padding: '0.25rem',
                fontSize: '1rem',
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
