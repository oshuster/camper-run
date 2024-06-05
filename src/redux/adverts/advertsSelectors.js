export const selectAllAdverts = (state) => state.adverts.campers;

export const selectIsLoading = (state) => state.adverts.isLoading;

export const selectIsShowLoadMore = (state) => state.adverts.isShowLoadMore;

export const selectPage = (state) => state.adverts.page;

export const selectIsOpen = (state) => state.adverts.isOpen;

export const selectAditionalInfo = (state) => state.adverts.aditionalInfo;

export const selectFavorite = (state) => state.adverts.favoriteAdverts;

export const selectFilteredAdverts = (state) => {
  const {
    filteredCampers,
    filterEquipment,
    filterVehicleType,
    campers,
    filterLocation,
  } = state.adverts;
  let filteredAdverts = filteredCampers;

  if (!filterEquipment.length && !filteredCampers.length) {
    console.log('RETURN CAMPERS');
    return campers;
  } else {
    //filtering quipment
    if (filterEquipment.length) {
      console.log('EQUIPMENT');
      const filteredByEquipment = (arr, keys) => {
        return arr.filter((obj) => {
          return keys.every((key) => {
            return obj.details[key] && obj.details[key] > 0;
          });
        });
      };
      //засетати значення
      filteredAdverts = [
        ...filteredByEquipment(filteredAdverts, filterEquipment),
      ];
    }

    //filtering Vehicle type
    if (filterVehicleType) {
      console.log('TYPE');
      const filteredByType = (arr, key) => {
        return arr.filter((obj) => obj.form === key);
      };
      //сетаємо значення
      filteredAdverts = [...filteredByType(filteredAdverts, filterVehicleType)];
    }
    //filtering Location
    if (filterLocation) {
      console.log('LOCATION');
      const filterByLocation = (arr, key) => {
        return arr.filter((obj) => {
          const location = obj.location.split(', ');
          if (location[location.length - 1] === key) {
            return obj;
          }
        });
      };
      //сетаємо значення
      filteredAdverts = [...filterByLocation(filteredAdverts, filterLocation)];
    }
  }
  return filteredAdverts;
};
