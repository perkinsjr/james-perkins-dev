import {
    Box,
    Button,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue as mode
} from '@chakra-ui/react';
import * as React from 'react';
import { EmailIcon } from '@chakra-ui/icons';

export const Newsletter = () => {
    return (
        <Box as="section" bg={mode('white', 'gray.700')} py="12">
            <Box
                id="revue-embed"
                textAlign="center"
                bg={mode('white', 'gray.800')}
                shadow="lg"
                maxW={{
                    base: 'xl',
                    md: '3xl'
                }}
                mx="auto"
                px={{
                    base: '6',
                    md: '8'
                }}
                py="4"
                rounded="lg"
            >
                <Box maxW="md" mx="auto">
                    <Text
                        color={mode('green.600', 'green.400')}
                        fontWeight="bold"
                        fontSize="sm"
                        letterSpacing="wide"
                    >
                        100+ PEOPLE ALREADY JOINED ❤️️
                    </Text>
                    <Heading mt="4" fontWeight="extrabold">
                        Like this post? Subscribe to the Newsletter
                    </Heading>
                    <Box mt="6">
                        <form
                            action="https://www.getrevue.co/profile/james_r_perkins/add_subscriber"
                            method="post"
                            id="revue-form"
                            name="revue-form"
                            target="_blank"
                        >
                            <Stack className="revue-form-group">
                                <Input
                                    aria-label="Enter your email"
                                    placeholder="Enter your email to join"
                                    name="member[email]"
                                    id="member_email"
                                    rounded="base"
                                    required
                                />
                                <Button
                                    type="submit"
                                    value="Subscribe"
                                    name="member[subscribe]"
                                    id="member_submit"
                                    w="full"
                                    colorScheme="purple"
                                    size="lg"
                                    textTransform="uppercase"
                                    fontSize="sm"
                                    fontWeight="bold"
                                >
                                    Join now
                                </Button>
                            </Stack>
                        </form>
                        <Text color={mode('gray.600', 'gray.400')} fontSize="sm" mt="5">
                            <Box
                                aria-hidden
                                as={EmailIcon}
                                display="inline-block"
                                marginEnd="2"
                                fontSize="lg"
                                color={mode('green.600', 'green.400')}
                            />
                            No spams. We&apos;re only send you relevant content
                        </Text>
                        <Text color={mode('gray.600', 'gray.400')} fontSize="sm" mt="5">
                            By subscribing, you agree with Revue&apos;s{' '}
                            <Box as="a" target="_blank" href="https://www.getrevue.co/terms">
                                terms of service
                            </Box>
                        </Text>
                        <Text color={mode('gray.600', 'gray.400')} fontSize="sm" mt="5">
                            and{' '}
                            <Box as="a" target="_blank" href="https://www.getrevue.co/privacy">
                                Privacy Policy
                            </Box>
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
