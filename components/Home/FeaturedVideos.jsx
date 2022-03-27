import { Heading, SimpleGrid, GridItem, Box, useColorModeValue as mode, } from "@chakra-ui/react";
import VideoCard from "./Video";

const FeaturedVideos = ({ videos }) => {
    const {items} = videos;
return (
    <Box
    as="section"
    bg={mode('white', 'gray.800')}
    py={{
      base: '10',
      sm: '10',
    }}
  >
    <Box
      maxW={{
        base: 'xl',
        md: '7xl',
      }}
      mx="auto"
      px={{
        base: '6',
        md: '8',
      }}
    >
      <Heading color="purple.400" size="xl" mb="8" fontWeight="extrabold">
                    Featured Videos
        </Heading>
      <SimpleGrid
        rowGap={8}
        columnGap={12}
        w="full"
        columns={{ base: 1, md: 2 }}
        spacing={6}
      >
        {items.map((video) => (
          <GridItem key={video.url} as="article">
            <VideoCard {...video} />
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
    </Box>
  );
}

export default FeaturedVideos;