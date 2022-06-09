import { Box, Divider, Text } from '@chakra-ui/react';

export const Comment = ({ name, comment }) => {
    return (
        <Box my={2}>
            <Text mb={2} fontWeight="extrabold">
                {name}
            </Text>
            <Text>{comment}</Text>
            <Divider />
        </Box>
    );
};
