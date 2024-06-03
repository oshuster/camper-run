import { Box, Button, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Image
        src="https://i.imgur.com/Q2BAOd2.png"
        alt="Not Found"
        mx="auto"
        mb={6}
        maxW="400px"
      />
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        This Page is Not on the Map
      </Text>
      <Button
        as={Link}
        to="/"
        color="#e44848"
        borderColor="#e44848"
        variant="outline"
        textDecoration="none"
      >
        Get back to home page
      </Button>
    </Box>
  );
};
