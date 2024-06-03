import { Button } from '../Buttons/MainBtn/Button';
import css from './Filters.module.scss';
import { useState } from 'react';
import { FilterButton } from '../FilterButton/FilterButton';
import { Divider } from '@chakra-ui/react';

const equipmentOptions = [
  { svgName: 'airConditioner', label: 'AC' },
  { svgName: 'transmision', label: 'Automatic' },
  { svgName: 'kitchen', label: 'Kitchen' },
  { svgName: 'TV', label: 'TV' },
  { svgName: 'shower', label: 'Shower/WC' },
];

const vehicleTypeOptions = [
  { svgName: 'camper1', label: 'Van' },
  { svgName: 'camper2', label: 'Fully Integrated' },
  { svgName: 'camper3', label: 'Alcove' },
];

export const Filters = () => {
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [selectedVehicleType, setSelectedVehicleType] = useState([]);

  const toggleEquipment = (label) => {
    setSelectedEquipment((prevSelected) =>
      prevSelected.includes(label)
        ? prevSelected.filter((item) => item !== label)
        : [...prevSelected, label]
    );
  };

  const toggleVehicleType = (label) => {
    setSelectedVehicleType(label);
  };

  return (
    <div className={css.filterWrapper}>
      <p className={css.subTitle}>Location</p>
      <div className={css.input}>Kyiv, Ukraine</div>
      <p className={css.subTitle}>Filters</p>
      <h3 className={css.title}>Vehicle equipment</h3>
      <Divider mb="24px" mt="24px" />
      <div className={css.filterGrid}>
        {equipmentOptions.map((option) => (
          <FilterButton
            key={option.label}
            svgName={option.svgName}
            label={option.label}
            selected={selectedEquipment.includes(option.label)}
            onClick={() => toggleEquipment(option.label)}
          />
        ))}
      </div>
      <h3 className={css.title}>Vehicle type</h3>
      <Divider mb="24px" mt="24px" />
      <div className={css.filterGrid}>
        {vehicleTypeOptions.map((option) => (
          <FilterButton
            key={option.label}
            svgName={option.svgName}
            label={option.label}
            selected={selectedVehicleType.includes(option.label)}
            onClick={() => toggleVehicleType(option.label)}
          />
        ))}
      </div>

      <Button>Search</Button>
    </div>
  );
};
