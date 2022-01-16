import {
    Box,
    Button,
    Center,
    HStack,
    Stack,
    StackDivider,
    useColorModeValue,
    useDisclosure,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { HiOutlineMenu, HiX } from 'react-icons/hi'
  import { NavLink } from './NavLink'
  import { NavList } from './NavList'
  import { NavListItem } from './NavListItem'
  const links = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Blog',
      href: '/post',
    },
    {
      label: 'Features',
      href: '#',
    },
    {
      label: 'Resources',
      href: '#',
    },
  ]
  
  const MobileNavContent = (props) => {
    const { isOpen, onToggle } = useDisclosure()
    return (
      <Box {...props} zIndex="10000">
        <Center
          as="button"
          p="2"
          fontSize="2xl"
          color={useColorModeValue('gray.600', 'gray.400')}
          onClick={onToggle}
        >
          {isOpen ? <HiX /> : <HiOutlineMenu />}
        </Center>
        <NavList
          pos="absolute"
          insetX="0"
          bg="purple.600"
          top="64px"
          animate={isOpen ? 'enter' : 'exit'}
        >
          <Stack spacing="0" divider={<StackDivider borderColor="whiteAlpha.200" />}>
            {links.map((link, index) => (
              <NavListItem key={index}>
                <NavLink.Mobile href={link.href}>{link.label}</NavLink.Mobile>
              </NavListItem>
            ))}
          </Stack>
        </NavList>
      </Box>
    )
  }
  
  const DesktopNavContent = (props) => {
    return (
      <HStack spacing="8" mx="8"align="stretch" {...props}>
        {links.map((link, index) => (
          <NavLink.Desktop key={index} href={link.href}>
            {link.label}
          </NavLink.Desktop>
        ))}
      </HStack>
    )
  }
  
  export const NavContent = {
    Mobile: MobileNavContent,
    Desktop: DesktopNavContent,
  }