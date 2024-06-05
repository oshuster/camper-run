import { Box } from '@chakra-ui/react';
import css from './VehicleCards.module.scss';
import { vehicles } from './vihicleData';
import { VehicleCard } from './Card/Card';

export const VehicleCards = () => {
  return (
    <Box className={css.vehicleWraper}>
      {vehicles.map((vehicle) => (
        <VehicleCard
          key={vehicle.alt}
          src={vehicle.src}
          alt={vehicle.alt}
          title={vehicle.title}
          description={vehicle.description}
        />
      ))}
    </Box>
  );
};
