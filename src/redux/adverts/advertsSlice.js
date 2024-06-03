import { createSlice } from '@reduxjs/toolkit';
import { getAdverts } from './advertsOperations';
import { initialState } from './advertsInitialState';
import { handlePending, handleRejected } from './advertsHandlers';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
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
        state.adverts = [];
        state.favoriteAdverts = [];
        state.isLogin = true;
        state.error = null;
      })
      .addCase(getAdverts.rejected, handleRejected);
  },
});

export const advertReducer = advertsSlice.reducer;
