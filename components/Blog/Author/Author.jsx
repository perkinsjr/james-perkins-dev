import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import { CardContent } from './CardContent'
import { CardWithAvatar } from './CardWithAvatar'
import { UserInfo } from './UserInfo'

export const Author = ({author}) => (
  <Box as="section" pt="20" pb="12" position="relative">
    <Box position="absolute" inset="0" height="32" bg="purple.600" />
    <CardWithAvatar
      maxW="xl"
      avatarProps={{
        src: author.image,
        name: author.name,
      }}
    >
      <CardContent>
        <Heading size="lg" fontWeight="extrabold" letterSpacing="tight">
          {author.name}
        </Heading>
        <Text color={useColorModeValue('gray.600', 'gray.400')}>
          {author.bio}
        </Text>
        <UserInfo linkedin={author.linkedin} twitter={author.twitter} github={author.github} />
      </CardContent>
    </CardWithAvatar>
  </Box>
)