import Link from "next/link";
import {
  LinkBox,
  LinkOverlay,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";


const BlogPostCard = (props) => {
  const hoverBg = useColorModeValue("gray.100", "gray.700");
  return (
    <LinkBox as="article">
      <VStack
        alignItems="stretch"
        w="full"
        p={{ base: 0, md: 4 }}
        my={{ base: 0, sm: 4 }}
        _hover={{
          bg: hoverBg,
          transform: "scale(1.025, 1.025)",
        }}
        rounded="md"
        transitionDuration="slow"
        transitionProperty="all"
        transitionTimingFunction="ease-out"
      >
        <VStack alignItems="flex-start">
          <Link href={`post/${props.sys.filename}`} passHref>
            <LinkOverlay>
              <Heading size="md">{props.data.title}</Heading>
            </LinkOverlay>
          </Link>
          <HStack
            divider={
              <Text mx={2} color="gray.500">
                •
              </Text>
            }
          >
            <Text color="gray.500" fontSize="sm">
              {new Date(props.data.date).toLocaleDateString()}
            </Text>
          </HStack>
        </VStack>
        <Text color="gray.500" fontSize="sm">
          {props.data.description}
        </Text>
      </VStack>
    </LinkBox>
  );
};

export {BlogPostCard}