import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";

export const fetchReadPokemos = createAsyncThunk(
    'home/fetchReadPokemos',
    async (_, { rejectWithValue }) => {
      
        try {
          const options = {
            method: 'GET',
            url: `/pokemon/150`
          };
          const  data = await axiosInstance(options);
          console.log(data.data)
          return data ;
        } catch (error) {
          console.log(error);
          return rejectWithValue(error);
        }
      }
    );
