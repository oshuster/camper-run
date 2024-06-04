export const selectAllAdverts = (state) => state.adverts.campers;

export const selectIsLoading = (state) => state.adverts.isLoading;

export const selectIsShowLoadMore = (state) => state.adverts.isShowLoadMore;

export const selectPage = (state) => state.adverts.page;

export const selectIsOpen = (state) => state.adverts.isOpen;

export const selectAditionalInfo = (state) => state.adverts.aditionalInfo;

export const selectFavorite = (state) => state.adverts.favoriteAdverts;

export const selectFilteredContacts = (store) => {
  const { contacts, filter } = store;
  if (!filter) {
    return contacts.items;
  } else {
    return contacts.items.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter) ||
        contact.number.includes(filter)
    );
  }
};

export const selectFilteredAdverts = (state) => {
  const { campers, filterEquipment, filterVehicleType } = state.adverts;
  let filteredAdverts = campers;
  console.log('filterEquipment>>>', filterEquipment);
  console.log('filterVehicleType>>>', filterVehicleType);

  if (!filterEquipment.length ?? !filterVehicleType) {
    return campers;
  } else {
    //перевіряємо чи заданні фільтри для обладнання
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

    //перевіряємо чи заданні фільтри для типу
    if (filterVehicleType) {
      const filteredByType = (arr, key) => {
        return arr.filter((obj) => obj.form === key);
      };
      //сетаємо значення
      filteredAdverts = [...filteredByType(filteredAdverts, filterVehicleType)];
    }
  }
  return filteredAdverts;
};
