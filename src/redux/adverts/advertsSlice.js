import { createSlice } from '@reduxjs/toolkit';
import { getAdverts, getOne, addFavorite } from './advertsOperations';
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
  },
  extraReducers: (builder) => {
    builder
      //getAllAdverts
      .addCase(getAdverts.pending, handlePending)
      .addCase(getAdverts.fulfilled, (state, { payload }) => {
        state.campers = [...state.campers, ...payload];
        state.error = null;
        state.isLoading = false;
      })
      .addCase(getAdverts.rejected, handleRejected)
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
      .addCase(addFavorite.rejected, handleRejected);
  },
});

export const {
  updatePage,
  clearAdverts,
  updateModalState,
  updateShowLoadMore,
  removeFavorite,
} = advertsSlice.actions;

export const advertReducer = advertsSlice.reducer;
