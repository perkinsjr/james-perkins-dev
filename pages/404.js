import { Layout } from '../components/Layout/Layout';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Seo } from '../components/Seo';

export default function FourOhFour() {
    return (
        <Layout>
            <Seo
                title="404"
                description="404"
                image="https://res.cloudinary.com/dub20ptvt/image/upload/v1642782664/sgbjmezsorrnhqtwnibg.png"
            />
            <Box maxWidth="1080px" width="100%" mx="auto" mt={[2, 4]} mb={4} px={4}>
                <Flex justifyContent="center" alignItems="center" flexDirection="column">
                    <Text fontSize="7xl" align="center">
                        Sorry this page doesn&apos;t exist
                    </Text>
                </Flex>
            </Box>
        </Layout>
    );
}
