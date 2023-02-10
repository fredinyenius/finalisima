import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";

export const fetchReadPokemos = createAsyncThunk(
    'home/fetchReadPokemos',
    async (_, { rejectWithValue }) => {
        try {
          const options = {
            method: 'GET',
            url: `/ability?populate=name,url`
          };
          const { ability } = await axiosInstance(options);
          return ability.ability ?? [];
        } catch (error) {
          console.log(error);
          return rejectWithValue(error);
        }
      }
    );