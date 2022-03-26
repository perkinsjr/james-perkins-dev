import { ClapButton } from '@lyket/react';
import { Box, Heading, Flex, Text } from '@chakra-ui/react';
export const LikeCounter = ({ slug }) => {
    return (
        <Flex mx="auto" flexDirection="column" >
            <Heading as="h4" textAlign="center">
                Like this post?
            </Heading>
            <Heading my={2} as="h5" fontSize="lg" textAlign="center">
                Give me some claps!
            </Heading>
            <ClapButton id={slug} namespace="posts" hideCounterIfLessThan={1}>
                {({ handlePress, totalClaps, isLoading, isCounterVisible }) => (
                    <>
                        <Box as="flex" mx="auto" alignContent="center" justifyContent="center">
                            <Box
                                as="button"
                                fontSize="5xl"
                                onClick={handlePress}
                                disabled={isLoading}
                            >
                                👏
                            </Box>
                        </Box>
                        {isCounterVisible && (
                            <Text fontSize="lg" textAlign="center">
                                Total Claps: {totalClaps}
                            </Text>
                        )}
                    </>
                )}
            </ClapButton>
        </Flex>
    );
};
