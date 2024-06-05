import {
  Box,
  Flex,
  Text,
  Link,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { NavLink } from './NavLink/NavLink';

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/catalog', label: 'Catalog' },
    { to: '/favorites', label: 'Favorites' },
  ];

  const navigationLinks = navLinks.map((link) => (
    <NavLink key={link.to} to={link.to} label={link.label} />
  ));

  return (
    <Box bg={useColorModeValue('white', 'gray.800')} px={4} boxShadow="md">
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Box>
          <Link as={RouterNavLink} to="/" _hover={{ textDecoration: 'none' }}>
            <Text fontSize="3xl" fontWeight="bold" color="red.500">
              camper
              <span style={{ fontWeight: 'normal' }}>run</span>
            </Text>
          </Link>
        </Box>
        <HStack
          as={'nav'}
          spacing={4}
          alignItems={'center'}
          justifyContent={'center'}
          flex={1}
          display={{ base: 'none', md: 'flex' }}
        >
          {navigationLinks}
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {navigationLinks}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};
