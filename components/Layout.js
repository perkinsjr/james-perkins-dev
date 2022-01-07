import {Flex} from "@chakra-ui/react"
export const Layout = (props) => {
  return (
    <Flex direction="column" minH="100vh">
      <main>{props.children}</main>
    </Flex>
  )
}
