import { HStack, Icon, Link, Stack, useColorModeValue } from '@chakra-ui/react';
import { RiTwitterLine, RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri';
export const UserInfo = (props) => {
    const { linkedin, twitter, github, ...stackProps } = props;
    return (
        <Stack
            direction={{
                base: 'row',
                sm: 'row'
            }}
            spacing={{
                base: '6',
                sm: '6'
            }}
            align="center"
            justify="center"
            mt="4"
            mx="auto"
            fontSize={['4xl', '2xl']}
            fontWeight="medium"
            color={useColorModeValue('purple.600', 'purple.300')}
            {...stackProps}
        >
            <HStack>
                <Link href={`https://linkedin.com/in/${linkedin}`} isExternal>
                    <Icon as={RiLinkedinBoxFill} />
                </Link>
            </HStack>
            <HStack>
                <Link href={`https://twitter.com/${twitter}`} isExternal>
                    <Icon as={RiTwitterLine} />
                </Link>
            </HStack>
            <HStack>
                <Link href={`https://github.com/${github}`} isExternal>
                    <Icon as={RiGithubFill} />
                </Link>
            </HStack>
        </Stack>
    );
};
