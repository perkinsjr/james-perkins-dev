import {
    Box,
    Flex,
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

export const CommentBox = ({ page }) => {
    console.log(page);
    const toast = useToast();
    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            comment: ''
        },
        onSubmit: async (values) => {
            values.page = page;
            const request = await fetch('/api/commentSubmit', {
                method: 'POST',
                body: JSON.stringify(values)
            });
            const result = await request.json();
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
            <Box maxW={{ base: 'xl', md: '2xl' }} mx="auto" px={{ base: '6', md: '8' }}>
                <Heading mt={{ base: '4', lg: '8' }} textAlign="center" as="h3" fontSize="large">
                    Leave a comment
                </Heading>
                <form onSubmit={formik.handleSubmit}>
                    <Flex direction={{ base: 'column', md: 'row' }}>
                        <FormControl isRequired>
                            <FormLabel htmlFor="email">Email address</FormLabel>
                            <Input
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                id="email"
                                type="email"
                            />
                        </FormControl>
                        <FormControl isRequired mx={{ base: 0, md: 2 }}>
                            <FormLabel htmlFor="name">Name</FormLabel>
                            <Input
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                id="name"
                                type="text"
                            />
                        </FormControl>
                    </Flex>
                    <FormControl isRequired mb={4}>
                        <FormLabel htmlFor="comment">Comment</FormLabel>
                        <Textarea
                            value={formik.values.comment}
                            onChange={formik.handleChange}
                            id="comment"
                        />
                        <FormHelperText>Please leave a comment</FormHelperText>
                    </FormControl>
                    <Button isLoading={formik.isSubmitting} type="submit">
                        Submit
                    </Button>
                </form>
            </Box>
        </Box>
    );
};
