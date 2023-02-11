import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";

export const fetchReadGames = createAsyncThunk(
    'game/fetchReadGames',
    async (_, { rejectWithValue }) => {
      
        try {
          const options = {
            method: 'GET',
            url: `/Continents`
          };
          const  {data} = await axiosInstance(options);
          console.log(data)
          return data ?? ;
        } catch (error) {
          console.log(error);
          return rejectWithValue(error);
        }
      }
    );