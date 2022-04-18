import {
    Box,
    Container,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    useColorModeValue,
    Img
} from '@chakra-ui/react';

import { CustomLink } from '../../Blog/CustomLink';
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
            mt={2}
        >
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
                    <Stack align={'center'} spacing={4}>
                        <CustomLink href={'/'}>Home</CustomLink>
                        <CustomLink href={'/post'}>Blog</CustomLink>
                        <CustomLink href={'https://plausible.io/jamesperkins.dev'}>
                            Analytics
                        </CustomLink>
                    </Stack>
                    <Stack align={'center'} spacing={4}>
                        <CustomLink href={'mailto:contactme@jamesperkins.dev'}>
                            Contact Me
                        </CustomLink>
                        <CustomLink href={'https://youtube.com/c/learntocodewithjames'}>
                            YouTube
                        </CustomLink>
                        <CustomLink href={'https://twitch.tv/jamesperkins'}>Twitch</CustomLink>
                    </Stack>
                    <Stack align={'center'} spacing={4}>
                        <CustomLink href={'https://twitter.com/james_r_perkins'}>
                            Twitter
                        </CustomLink>
                        <CustomLink href={'https://www.polywork.com/jamesperkins/'}>
                            Polywork
                        </CustomLink>
                        <CustomLink href={'https://www.github.com/perkinsjr/'}>Github</CustomLink>
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
                <Text pt={6} fontSize={'sm'} textAlign={'center'}>
                    Powered by <CustomLink href={'https://tina.io/'}>TinaCMS</CustomLink>
                </Text>
            </Box>
        </Flex>
    );
}
