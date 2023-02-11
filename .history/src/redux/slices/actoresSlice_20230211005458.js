import { createSlice } from "@reduxjs/toolkit";
import { fetchReadActores } from "../thunks/homeThunk";

const initialState = {
    loading: false,
    error: {},
    actores: []

};

const actoresSlice = createSlice({
    name: 'actor',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    builder.addCase(fetchReadActores.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReadActores.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = {};
      state.actores = payload;
    });
    builder.addCase(fetchReadActores.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.actores = [];
    });
}
});
 export default actoresSlice.reducer;