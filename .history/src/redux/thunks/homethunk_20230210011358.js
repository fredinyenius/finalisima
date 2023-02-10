import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";

export const fetchReadPokemos = createAsyncThunk(
    'home/fetchReadPokemos',
    async (_, { rejectWithValue }) => {
        try {
          const options = {
            method: 'GET',
            url: `/api::danza.danza?page=1&pageSize=10&sort=name:ASC `
          };
          const { data } = await axiosInstance(options);
          return data.data ?? [];
        } catch (error) {
          console.log(error);
          return rejectWithValue(error);
        }
      }
    );