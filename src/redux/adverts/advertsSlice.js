import { createSlice } from '@reduxjs/toolkit';
import {
  getAdverts,
  getOne,
  addFavorite,
  getAll,
  getFiltered,
} from './advertsOperations';
import { initialState } from './advertsInitialState';
import { handlePending, handleRejected } from './advertsHandlers';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    updatePage(state, { payload }) {
      state.page = payload;
    },
    clearAdverts(state) {
      state.campers = [];
      state.advertsAll = [];
      state.page = 1;
    },
    updateModalState(state, { payload }) {
      state.isOpen = payload;
    },
    updateShowLoadMore(state, { payload }) {
      state.isShowLoadMore = payload;
    },
    removeFavorite(state, { payload }) {
      state.favoriteAdverts = state.favoriteAdverts.filter(
        (advert) => advert._id !== payload
      );
    },
    updateFilterEquipment(state, { payload }) {
      state.filterEquipment = payload;
    },
    updateFilterVehicleType(state, { payload }) {
      state.filterVehicleType = payload;
    },
    updateFilterLocation(state, { payload }) {
      state.filterLocation = payload;
    },
    clearStateFilters(state) {
      state.filterEquipment = [];
      state.filterVehicleType = '';
      state.filterLocation = '';
    },
  },
  extraReducers: (builder) => {
    builder
      //getPartialAdverts
      .addCase(getAdverts.pending, handlePending)
      .addCase(getAdverts.fulfilled, (state, { payload }) => {
        state.campers = [...state.campers, ...payload];
        state.error = null;
        state.isLoading = false;
      })
      .addCase(getAdverts.rejected, handleRejected)
      //getFiltered
      .addCase(getFiltered.pending, handlePending)
      .addCase(getFiltered.fulfilled, (state, { payload }) => {
        state.advertsAll = [...state.advertsAll, ...payload];
        state.error = null;
        state.isLoading = false;
      })
      .addCase(getFiltered.rejected, handleRejected)
      //getOne
      .addCase(getOne.pending, handlePending)
      .addCase(getOne.fulfilled, (state, { payload }) => {
        state.aditionalInfo = payload;
        state.isOpen = true;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(getOne.rejected, handleRejected)
      //addFavorite
      .addCase(addFavorite.pending, handlePending)
      .addCase(addFavorite.fulfilled, (state, { payload }) => {
        state.favoriteAdverts = [...state.favoriteAdverts, payload];
        state.error = null;
        state.isLoading = false;
      })
      .addCase(addFavorite.rejected, handleRejected)
      //getAll
      .addCase(getAll.pending, handlePending)
      .addCase(getAll.fulfilled, (state, { payload }) => {
        state.advertsAll = [...state.advertsAll, ...payload];
        state.error = null;
        state.isLoading = false;
      })
      .addCase(getAll.rejected, handleRejected);
  },
});

export const {
  updatePage,
  clearAdverts,
  updateModalState,
  updateShowLoadMore,
  removeFavorite,
  updateFilterVehicleType,
  updateFilterEquipment,
  updateFilterLocation,
  clearStateFilters,
} = advertsSlice.actions;

export const advertReducer = advertsSlice.reducer;
