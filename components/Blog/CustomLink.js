import { Link } from '@chakra-ui/layout';

export const CustomLink = ({ children, href }) => {
    return (
        <Link
            textDecoration="underline"
            fontWeight="bold"
            transition=".3s"
            pos="relative"
            fontSize="1rem"
            _hover={{
                textDecoration: 'none',
                color: 'RGB(113, 90, 255)',
                _after: {
                    w: '100%'
                }
            }}
            _after={{
                content: "''",
                height: '2px',
                bgColor: 'RGB(113, 90, 255)',
                position: 'absolute',
                left: '0',
                bottom: '-3px',
                transition: '.3s',
                w: '0'
            }}
            href={href}
            target={href?.includes('http') ? '_blank' : '_self'}
        >
            {children}
        </Link>
    );
};
