import {
    Box,
    Heading,
    Input,
    Textarea,
    useColorModeValue as mode,
    FormControl,
    FormLabel,
    FormHelperText,
    Button,
    useToast
} from '@chakra-ui/react';
import { useFormik } from 'formik';

export const ContactMe = () => {
    const toast = useToast();
    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            message: ''
        },
        onSubmit: async (values) => {
            const request = await fetch('/api/formsubmit', {
                method: 'POST',
                body: JSON.stringify(values)
            });
            const result = await request.json();
            console.log(result);
            if (!result.data === 'ok') {
                toast({
                    title: `Error in submission`,
                    description: 'Please try again later',
                    status: 'error',
                    isClosable: true
                });
                return;
            }
            toast({
                title: `Submission successful`,
                status: 'success',
                isClosable: true
            });
            formik.resetForm();
        }
    });
    return (
        <Box
            as="section"
            bg={mode('white', 'gray.800')}
            pt={{ base: '0', md: '2', lg: '16' }}
            pb="24"
        >
            <Box maxW={{ base: 'xl', md: '5xl' }} mx="auto" px={{ base: '6', md: '8' }}>
                <Heading textAlign="center" as="h1">
                    Contact me{' '}
                </Heading>
                <Heading mt={{ base: '4', lg: '8' }} textAlign="center" as="h3" fontSize="large">
                    Reach out for content queries, questions or working together.
                </Heading>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl isRequired>
                        <FormLabel htmlFor="email">Email address</FormLabel>
                        <Input
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            id="email"
                            type="email"
                        />
                        <FormHelperText>We&apos;ll never share your email.</FormHelperText>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <Input
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            id="name"
                            type="text"
                        />
                        <FormHelperText>Just a first name is fine!</FormHelperText>
                    </FormControl>
                    <FormControl isRequired mb={4}>
                        <FormLabel htmlFor="message">Message</FormLabel>
                        <Textarea
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            id="message"
                        />
                        <FormHelperText>What do you want to talk about?</FormHelperText>
                    </FormControl>
                    <Button isLoading={formik.isSubmitting} type="submit">
                        Reach out!
                    </Button>
                </form>
            </Box>
        </Box>
    );
};
