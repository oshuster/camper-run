import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllAdverts } from '../../api/advertsApi';

export const getAdverts = createAsyncThunk(
  'adverts/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllAdverts();
      return response.data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);
