import { useState } from 'react';
import {
    chakra,
    VStack,
    InputGroup,
    Input,
    InputRightElement,
    useColorModeValue,
    Heading,
    Text,
    Icon,
    IconButton
} from '@chakra-ui/react';
import { HiOutlineMail } from 'react-icons/hi';

export const Newsletter = () => {
    const [form, setForm] = useState({ state: '' });

    const subscribe = async (e) => {
        e.preventDefault();
        setForm({ state: 'loading' });

        const res = await fetch('/api/subscribe', {
            body: JSON.stringify({
                email: e.currentTarget.elements['email'].value
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });

        const { error, message } = await res.json();
        if (error) {
            setForm({
                state: 'error',
                message: error
            });
            return;
        }

        setForm({
            state: 'success',
            message
        });
    };

    return (
        <VStack
            alignItems="center"
            w="full"
            border="1px solid"
            p={{ base: 2, md: 2 }}
            bg={useColorModeValue('gray.50', 'gray.700')}
            rounded="md"
            mt={8}
            spacing={3}
        >
            <Heading size="md">Subscribe to my newsletter</Heading>
            <Text textAlign="center">
                Get emails when I post new articles, new courses and videos and much more!
            </Text>
            {form.state !== 'success' && form.state !== 'error' && (
                <>
                    <chakra.form
                        name="subscribe-form"
                        target="_blank"
                        w="full"
                        onSubmit={subscribe}
                    >
                        <InputGroup w="full">
                            <Input
                                disabled={form.state === 'loading'}
                                required
                                name="email"
                                placeholder="email@example.com"
                                type="email"
                                variant="filled"
                            />
                            <InputRightElement>
                                <IconButton
                                    aria-label="Subscribe"
                                    icon={<Icon as={HiOutlineMail} />}
                                    isLoading={form.state === 'loading'}
                                    name="subscribe"
                                    size="sm"
                                    type="submit"
                                />
                            </InputRightElement>
                        </InputGroup>
                    </chakra.form>
                </>
            )}
            {form.state === 'success' && (
                <Text color="green.500" size="sm">
                    {form.message}
                </Text>
            )}
            {form.state === 'error' && (
                <Text color="red.500" size="sm">
                    {form.message} 😕
                </Text>
            )}
        </VStack>
    );
};
