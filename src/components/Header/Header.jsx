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

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            <Text fontSize="2xl" fontWeight="bold" color="red.500">
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
          <Link
            as={RouterNavLink}
            to="/"
            px={2}
            py={1}
            rounded={'md'}
            _hover={{ textDecoration: 'none', color: '#d84343' }}
            _activeLink={{ color: '#d84343', fontWeight: 'bold' }}
          >
            Home
          </Link>
          <Link
            as={RouterNavLink}
            to="/catalog"
            px={2}
            py={1}
            rounded={'md'}
            _hover={{ textDecoration: 'none', color: 'gray.700' }}
            _activeLink={{ color: '#d84343', fontWeight: 'bold' }}
          >
            Catalog
          </Link>
          <Link
            as={RouterNavLink}
            to="/favorites"
            px={2}
            py={1}
            rounded={'md'}
            _hover={{ textDecoration: 'none', color: 'gray.700' }}
            _activeLink={{ color: '#d84343', fontWeight: 'bold' }}
          >
            Favorites
          </Link>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            <Link
              as={RouterNavLink}
              to="/"
              px={2}
              py={1}
              rounded={'md'}
              _hover={{ textDecoration: 'none', color: '#d84343' }}
              _activeLink={{ color: '#d84343', fontWeight: 'bold' }}
            >
              Home
            </Link>
            <Link
              as={RouterNavLink}
              to="/catalog"
              px={2}
              py={1}
              rounded={'md'}
              _hover={{ textDecoration: 'none', color: 'gray.700' }}
              _activeLink={{ color: '#d84343', fontWeight: 'bold' }}
            >
              Catalog
            </Link>
            <Link
              as={RouterNavLink}
              to="/favorites"
              px={2}
              py={1}
              rounded={'md'}
              _hover={{ textDecoration: 'none', color: 'gray.700' }}
              _activeLink={{ color: '#d84343', fontWeight: 'bold' }}
            >
              Favorites
            </Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};
