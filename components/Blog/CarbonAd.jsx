import { Flex } from '@chakra-ui/react';
import Carbon from 'react-carbon';

export const CarbonAd = ({ name }) => {
    return (
        <Flex width="100%" justifyContent="center" alignContent="center" mx="auto">
            <Carbon name={name} placement="wwwjamesperkinsdev" serve="CEAD4K77" />
        </Flex>
    );
};
