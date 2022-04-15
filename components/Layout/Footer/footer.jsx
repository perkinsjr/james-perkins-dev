import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    useColorModeValue,
    Img
} from '@chakra-ui/react';

const Logo = () => {
    return (
        <Img
            height="64px"
            width="64px"
            src="https://res.cloudinary.com/dub20ptvt/image/upload/v1650064753/James-Perkins-Site/plmtmmgthuivy4s0ksvh.png"
        />
    );
};

export default function Footer() {
    return (
        <Flex
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
            mx="auto"
            justifyContent="center"
            alignContent="center"
            direction="column"
        >
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
                    <Stack align={'center'}>
                        <Link href={'/'}>Home</Link>
                        <Link href={'/post'}>Blog</Link>
                        <Link href={'https://plausible.io/jamesperkins.dev'}>Analytics</Link>
                    </Stack>
                    <Stack align={'center'}>
                        <Link href={'mailto:contactme@jamesperkins.dev'}>Contact Me</Link>
                    </Stack>
                    <Stack align={'center'}>
                        <Link target="_blank" href={'https://twitter.com/james_r_perkins'}>
                            Twitter
                        </Link>
                        <Link target="_blank" href={'https://instagram.com/james_r_perkins'}>
                            Instagram
                        </Link>
                        <Link target="_blank" href={'https://www.polywork.com/jamesperkins/'}>
                            Polywork
                        </Link>
                        <Link target="_blank" href={'https://www.github.com/perkinsjr/'}>
                            Github
                        </Link>
                    </Stack>
                </SimpleGrid>
            </Container>
            <Box py={10}>
                <Flex
                    align={'center'}
                    _before={{
                        content: '""',
                        borderBottom: '1px solid',
                        borderColor: useColorModeValue('gray.200', 'gray.700'),
                        flexGrow: 1,
                        mr: 8
                    }}
                    _after={{
                        content: '""',
                        borderBottom: '1px solid',
                        borderColor: useColorModeValue('gray.200', 'gray.700'),
                        flexGrow: 1,
                        ml: 8
                    }}
                >
                    <Logo />
                </Flex>
                <Text pt={6} fontSize={'sm'} textAlign={'center'}>
                    © 2022 James Perkins. All rights reserved
                </Text>
            </Box>
        </Flex>
    );
}
