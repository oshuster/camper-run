import { createSlice } from '@reduxjs/toolkit';
import { getAdverts } from './advertsOperations';
import { initialState } from './advertsInitialState';
import { handlePending, handleRejected } from './advertsHandlers';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    updatePage(state) {
      state.page = state.page + 1;
    },
    // setTheme(state) {
    //   state.user.theme = 'dark';
    // },
    // setTokenToRedux(state, action) {
    //   state.token = action.payload;
    //   state.isLogin = true;
    //   state.isLoading = false;
    // },
    // clearTokenToRedux(state) {
    //   state.token = null;
    // },
  },
  extraReducers: (builder) => {
    builder
      //getAllAdverts
      .addCase(getAdverts.pending, handlePending)
      .addCase(getAdverts.fulfilled, (state, { payload }) => {
        console.log('payload', payload);
        // state.campers = state.campers.adverts.push(payload);
        state.campers.push(...payload);
        state.favoriteAdverts = [];
        state.error = null;
        state.isLoading = false;
      })
      .addCase(getAdverts.rejected, handleRejected);
  },
});

export const { updatePage } = advertsSlice.actions;

export const advertReducer = advertsSlice.reducer;
