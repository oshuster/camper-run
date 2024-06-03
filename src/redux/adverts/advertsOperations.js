import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAdvertById, getAllAdverts } from '../../api/advertsApi';
import { updateShowLoadMore } from './advertsSlice';

export const getAdverts = createAsyncThunk(
  'adverts/getAll',
  async (page, { rejectWithValue, dispatch }) => {
    try {
      const response = await getAllAdverts(page);
      if (response.length < 4) {
        dispatch(updateShowLoadMore(false));
      }
      return response;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const getOne = createAsyncThunk(
  'adverts/getOne',
  async (id, { rejectWithValue }) => {
    try {
      const response = await getAdvertById(id);
      return response;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const addFavorite = createAsyncThunk(
  'adverts/addFavorite',
  async (id, { rejectWithValue }) => {
    try {
      const response = await getAdvertById(id);
      return response;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);
