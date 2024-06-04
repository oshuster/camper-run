import { Button } from '../Buttons/MainBtn/Button';
import css from './Filters.module.scss';
import { useState } from 'react';
import { FilterButton } from '../FilterButton/FilterButton';
import { Divider } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateFilterEquipment,
  updateFilterVehicleType,
} from '../../redux/adverts/advertsSlice';
import { selectFilteredAdverts } from '../../redux/adverts/advertsSelectors';
import { equipmentOptions, vehicleTypeOptions } from './options';

export const Filters = () => {
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [selectedVehicleType, setSelectedVehicleType] = useState('');
  const dispatch = useDispatch();
  const filteredAdverts = useSelector(selectFilteredAdverts);
  console.log('filteredAdverts >>>', filteredAdverts);

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

  const handleSearch = (e) => {
    dispatch(updateFilterEquipment(selectedEquipment));
    dispatch(updateFilterVehicleType(selectedVehicleType));
    console.log('Equipment >>>', selectedEquipment);
    console.log('Type >>>', selectedVehicleType);
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
            data-id={option.dataId}
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

      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
};

//   "airConditioner": 1,
//   "kitchen": 1,
//   "TV": 1,
//   "shower": 1,
//   "CD": 1,
//   "bathroom": 1,
//   "beds": 3,
//   "radio": 1,
//   "toilet": 1,
//   "freezer": 1,

//   "hob": 3,
//   "microwave": 1,

// type:
// panelTruck
// fullyIntegrated
// alcove",
