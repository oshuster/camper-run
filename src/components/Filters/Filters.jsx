import { Button } from '../Buttons/MainBtn/Button';
import css from './Filters.module.scss';
import { useState } from 'react';
import { FilterButton } from '../FilterButton/FilterButton';
import { Divider, Icon, IconButton, Select } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import {
  clearAdverts,
  clearStateFilters,
  updateFilterEquipment,
  updateShowLoadMore,
} from '../../redux/adverts/advertsSlice';

import {
  equipmentOptions,
  vehicleTypeOptions,
  locationOptions,
} from './options';
import { GrLocation } from 'react-icons/gr';
import { LuFilterX } from 'react-icons/lu';
import { nanoid } from 'nanoid';
import { getAdverts, getFiltered } from '../../redux/adverts/advertsOperations';

export const Filters = () => {
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [selectedVehicleType, setSelectedVehicleType] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const dispatch = useDispatch();

  const toggleEquipment = (e) => {
    const id = e.target.closest('[data-id]').dataset.id;
    setSelectedEquipment((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };

  const toggleVehicleType = (e) => {
    const id = e.target.closest('[data-id]').dataset.id;
    setSelectedVehicleType((prevSelected) => (prevSelected === id ? '' : id));
  };

  const handleSearch = () => {
    const queryObj = {
      equipment: selectedEquipment,
      location: selectedLocation,
      type: selectedVehicleType,
    };

    dispatch(clearAdverts());
    dispatch(updateFilterEquipment(selectedEquipment));
    dispatch(getFiltered(queryObj));
    dispatch(updateShowLoadMore(false));
  };

  const toggleLocation = (e) => {
    const city = e.target.value;
    setSelectedLocation(city);
  };

  const clearFilters = () => {
    setSelectedEquipment([]);
    setSelectedVehicleType('');
    setSelectedLocation('');
    dispatch(clearStateFilters());
    dispatch(clearAdverts());
    dispatch(getAdverts());
    dispatch(updateShowLoadMore(true));
  };

  return (
    <div className={css.filterWrapper}>
      <p className={css.subTitle}>Location</p>
      <Select
        h="56px"
        bg="#F7F7F7"
        mb="32px"
        icon={<Icon as={GrLocation} width="16px" height="16px" />}
        placeholder="Select location"
        onChange={toggleLocation}
        value={selectedLocation}
      >
        {locationOptions.map(({ location }) => (
          <option key={nanoid()} value={location}>
            {location}
          </option>
        ))}
      </Select>
      <p className={css.subTitle}>Filters</p>
      <h3 className={css.title}>Vehicle equipment</h3>
      <Divider mb="24px" mt="24px" />
      <div className={css.filterGrid}>
        {equipmentOptions.map((option) => (
          <FilterButton
            key={option.label}
            svgName={option.svgName}
            label={option.label}
            dataId={option.dataId}
            selected={selectedEquipment.includes(option.dataId)}
            onClick={toggleEquipment}
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
            dataId={option.dataId}
            selected={selectedVehicleType === option.dataId}
            onClick={toggleVehicleType}
          />
        ))}
      </div>
      <div className={css.btnWrapper}>
        <Button onClick={handleSearch}>Search</Button>
        <IconButton
          aria-label="Clear filters"
          icon={<LuFilterX />}
          isRound={true}
          className={css.btnClear}
          onClick={clearFilters}
        />
      </div>
    </div>
  );
};
