import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomOneDark from 'react-syntax-highlighter/dist/cjs/styles/prism/material-dark';
import { useTheme, Flex, Box, Text, useClipboard, IconButton, Icon } from '@chakra-ui/react';
import { CopyIcon, CheckIcon } from '@chakra-ui/icons';
export const CodeBlock = ({ children, language }) => {
    const theme = useTheme();
    const CopyButton = ({ codeString }) => {
        const { hasCopied, onCopy } = useClipboard(codeString);

        return (
            <IconButton
                size="sm"
                colorScheme="blackAlpha"
                variant="outline"
                icon={
                    <Icon
                        as={hasCopied ? CheckIcon : CopyIcon}
                        height={5}
                        width={5}
                        color="white"
                        aria-hidden="true"
                    />
                }
                onClick={onCopy}
                aria-hidden={hasCopied ? 'Copied' : 'Copy'}
            />
        );
    };
    return (
        <Box position="relative" width={'100%'}>
            <SyntaxHighlighter
                code={children || ''}
                language={language || 'jsx'}
                style={atomOneDark}
                customStyle={{
                    marginTop: 0,
                    marginBottom: 0,
                    width: '100%',
                    padding: `${theme.space['12']} ${theme.space['4']} ${theme.space['4']}`,
                    fontSize: theme.fontSizes['sm'],
                    borderRadius: theme.radii['md']
                }}
            />
            <Flex
                position="absolute"
                top={2}
                insetX={4}
                alignItems="center"
                justifyContent="space-between"
            >
                <Text
                    as="span"
                    textColor="gray.500"
                    fontSize="xs"
                    fontWeight="medium"
                    textTransform="uppercase"
                    letterSpacing="wide"
                >
                    {language}
                </Text>
                <CopyButton codeString={children} />
            </Flex>
        </Box>
    );
};
