import {Flex, useColorModeValue as mode} from "@chakra-ui/react"
export const Layout = (props) => {
  return (
    <Flex direction="column" minH="100vh" bg={mode('white', 'gray.800')}>
      <main>{props.children}</main>
    </Flex>
  )
}
