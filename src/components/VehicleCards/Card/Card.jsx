import { Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react';
import css from '../VehicleCards.module.scss';

export const VehicleCard = ({ src, alt, title, description }) => (
  <Card className={css.vehicleCard}>
    <CardBody>
      <Image src={src} alt={alt} borderRadius="lg" />
      <Stack mt="6" spacing="3" alignItems="center">
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
      </Stack>
    </CardBody>
  </Card>
);
