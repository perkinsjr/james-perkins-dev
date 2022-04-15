import { chakra } from '@chakra-ui/react';

const DesktopNavLink = (props) => {
    return (
        <chakra.a
            fontWeight="medium"
            fontSize="lg"
            display="flex"
            alignItems="center"
            justifyContent="center"
            transition=".3s"
            pos="relative"
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
            {...props}
        />
    );
};

const MobileNavLink = (props) => {
    return (
        <chakra.a
            display="block"
            textAlign="center"
            fontWeight="bold"
            py="5"
            fontSize="lg"
            color="white"
            w="full"
            _hover={{
                bg: 'blackAlpha.200'
            }}
            {...props}
        />
    );
};

export const NavLink = {
    Mobile: MobileNavLink,
    Desktop: DesktopNavLink
};
