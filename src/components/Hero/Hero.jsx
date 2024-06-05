import { Box, Heading, Highlight } from '@chakra-ui/react';
import heroImage from '../../assets/hero/hero.webp';
import { Button } from '../Buttons/MainBtn/Button';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/catalog');
  };

  return (
    <Box
      display="flex"
      alignItems="flex-start"
      justifyContent="center"
      width="100%"
      height="100vh"
      py={12}
      bgImage={`url(${heroImage})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      mb={2}
      position="relative"
    >
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        mt={1}
        bg="rgba(255, 255, 255, 0.8)"
        p={4}
        borderRadius="md"
        margin="15px"
      >
        <Heading lineHeight="tall" fontSize="2xl" color="red.500">
          <Highlight
            query="Camperrun:"
            styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.200' }}
          >
            Camperrun: Світ чекає – сідай за кермо!
          </Highlight>
        </Heading>
        <Button aria-label="Search Button" onClick={handleSearchClick}>
          Search
        </Button>
      </Box>
    </Box>
  );
};
