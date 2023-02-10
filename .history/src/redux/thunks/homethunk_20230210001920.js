import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchReadPokemos = createAsyncThunk(
    'home/fetchReadPokemos',
    async (_, { rejectWithValue }) => {
        try {
          const options = {
            method: 'GET',
            url: `ability?populate=name,url`
          };
          const { data } = await axiosInstance(options);
          return data.data ?? [];
        } catch (error) {
          console.log(error);
          return rejectWithValue(error);
        }
      }
    );