import {Flex, useColorModeValue as mode} from "@chakra-ui/react"
export const Layout = (props) => {
  return (
    <Flex direction="column" minH="100vh" bg={mode('gray.50', 'gray.800')}>
      <main>{props.children}</main>
    </Flex>
  )
}
