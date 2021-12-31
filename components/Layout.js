import Link from 'next/link'
import Head from 'next/head'
import {Flex} from "@chakra-ui/react"
export const Layout = (props) => {
  return (
    <Flex direction="column" minH="100vh">
      <main>{props.children}</main>
    </Flex>
  )
}
