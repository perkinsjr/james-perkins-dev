import { extendTheme } from '@chakra-ui/react';
import { withProse } from '@nikolovlazar/chakra-ui-prose';
const theme = extendTheme(
    withProse({
        baseStyle: () => ({
            p: {
                fontSize: '1.125rem',
                lineHeight: '1.5'
            },
            h1: {
                color: 'purple.500'
            },
            a: {
                colorScheme: 'purple',
                fontWeight: 'bold',
                textDecoration: 'underline'
            },
            code: {
                bgColor: 'purple.600',
                padding: '0.25rem',
                fontSize: '1.125rem',
                borderRadius: '0.25rem',
                fontWeight: 'normal',
                color: 'white',
                '&::before, &::after': {
                    content: '""'
                }
            }
        })
    })
);

export default theme;
