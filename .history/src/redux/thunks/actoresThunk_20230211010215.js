import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";

export const fetchReadActores = createAsyncThunk(
    'actor/fetchReadActores',
    async (_, { rejectWithValue }) => {
      
        try {
          const options = {
            method: 'GET',
            url: `/Characters`
          };
          const  {data} = await axiosInstance(options);
          console.log('data')
          return data ?? [];
        } catch (error) {
          console.log(error);
          return rejectWithValue(error);
        }
      }
    );