import { useState, useEffect } from 'react';
import {
    VStack,
    AspectRatio,
    Spinner,
    Heading,
    Text,
    Link,
    LinkBox,
    LinkOverlay,
    Flex,
    Icon,
    chakra
} from '@chakra-ui/react';
import Image from 'next/image';
import { HiPlay } from 'react-icons/hi';

const VideoCard = ({ title, description, url }) => {
    const [videoId, setVideoId] = useState('');
    const VideoImage = chakra(Image, {
        shouldForwardProp: (prop) => ['layout', 'src', 'alt'].includes(prop)
    });
    useEffect(() => {
        const queryParams = url?.split('?')[1];
        const params = new URLSearchParams(queryParams);
        setVideoId(params.get('v'));
    }, [url]);

    if (!videoId) return <Spinner />;
    return (
        <LinkBox zIndex="dropdown">
            <VStack alignItems="flex-start" spacing={4}>
                <AspectRatio
                    position="relative"
                    overflow="hidden"
                    w="full"
                    ratio={16 / 9}
                    role="group"
                    rounded="lg"
                >
                    <>
                        <LinkOverlay href={url} target="_blank">
                            <Flex
                                position="absolute"
                                zIndex="docked"
                                align="center"
                                justify="center"
                                bg="transparent"
                                _groupHover={{ bg: 'blackAlpha.500' }}
                                inset={0}
                                transitionDuration="slow"
                                transitionProperty="background"
                                transitionTimingFunction="ease-out"
                            >
                                <Icon
                                    as={HiPlay}
                                    w={{ base: 12, md: 8 }}
                                    h={{ base: 12, md: 8 }}
                                    color="white"
                                    opacity={0}
                                    _groupHover={{ opacity: 1 }}
                                    transitionDuration="slow"
                                    transitionProperty="opacity"
                                    transitionTimingFunction="ease-out"
                                />
                            </Flex>
                        </LinkOverlay>
                        <VideoImage
                            alt={`Thumbnail of ${title}`}
                            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                            fallbackSrc={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                            layout="fill"
                            objectFit="cover"
                        />
                    </>
                </AspectRatio>
                <VStack alignItems="flex-start" spacing={2}>
                    <Link href={url} isExternal>
                        <Heading size="sm">{title}</Heading>
                    </Link>
                    <Text color="gray.500" fontSize="sm">
                        {description}
                    </Text>
                </VStack>
            </VStack>
        </LinkBox>
    );
};

export default VideoCard;
