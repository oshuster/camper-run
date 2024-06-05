export const selectAllAdverts = (state) => state.adverts.campers;

export const selectIsLoading = (state) => state.adverts.isLoading;

export const selectIsShowLoadMore = (state) => state.adverts.isShowLoadMore;

export const selectPage = (state) => state.adverts.page;

export const selectIsOpen = (state) => state.adverts.isOpen;

export const selectAditionalInfo = (state) => state.adverts.aditionalInfo;

export const selectFavorite = (state) => state.adverts.favoriteAdverts;

export const selectFilteredAdverts = (state) => {
  const { filteredCampers, filterEquipment, campers } = state.adverts;
  let filteredAdverts = filteredCampers;

  if (!filterEquipment.length && !filteredCampers.length) {
    return campers;
  } else {
    //filtering quipment
    if (filterEquipment.length) {
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
  }
  return filteredAdverts;
};
