import { staticRequest } from 'tinacms';
import { Layout } from '../../components/Layout/Layout';
import { Seo } from '../../components/Seo';
import {
    Heading,
    VStack,
    Box,
    Container,
    List,
    ListItem
} from '@chakra-ui/react';
import { CarbonAd } from '../../components/Blog/CarbonAd';
import { CategoryCard } from '../../components/Blog/CategoryCard';
export default function Categories(props) {
    const categoryList = props.categoryConnection.edges;
    return (
        <Layout>
            <Seo
                title="Categories | James Perkins"
                description="Categories"
                image="https://res.cloudinary.com/dub20ptvt/image/upload/v1642782664/sgbjmezsorrnhqtwnibg.png"
            />

            <Box maxWidth="1080px" width="100%" mx="auto" mt={[2, 4]} mb={4} px={4}>
                <CarbonAd name={'carbon-index-upper'} />
                <Container>
                    <VStack as="section" w="full" spacing={6} mb={4}>
                        <Heading as="h1" textAlign="center" fontSize="3xl" m={2}>
                            All Categories
                        </Heading>
                    </VStack>
                    <List w="full" spacing={4}>
                        {categoryList.map((category) => (
                            <ListItem key={category.node.title}>
                                <CategoryCard {...category.node} />
                            </ListItem>
                        ))}
                    </List>
                </Container>
            </Box>
        </Layout>
    );
}

export const getStaticProps = async () => {
    const tinaProps = await staticRequest({
        query: `{
            categoryConnection{
            edges{
              node{
                title
                description
                _sys{
                    filename
                }
              }
            }
          }
        }`,
        variables: {}
    });

    return {
        props: {
            ...tinaProps
        }
    };
};
