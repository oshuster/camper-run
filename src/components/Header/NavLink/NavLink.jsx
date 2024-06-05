import { Link } from '@chakra-ui/react';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const NavLink = ({ to, label }) => (
  <Link
    as={RouterNavLink}
    to={to}
    px={2}
    py={1}
    rounded={'md'}
    fontSize="xl"
    _hover={{ textDecoration: 'none', color: 'gray.700' }}
    _activeLink={{ color: '#d84343', fontWeight: 'bold' }}
  >
    {label}
  </Link>
);
