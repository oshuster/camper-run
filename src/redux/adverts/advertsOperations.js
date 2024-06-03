import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllAdverts } from '../../api/advertsApi';

export const getAdverts = createAsyncThunk(
  'adverts/getAll',
  async (page, { rejectWithValue }) => {
    try {
      const response = await getAllAdverts(page);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);
