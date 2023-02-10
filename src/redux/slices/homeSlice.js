import { createSlice } from "@reduxjs/toolkit";
import { fetchReadPokemos } from "../thunks/homeThunk";

const initialState = {
    loading: false,
    error: {},
    pokemos: {}

};

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    builder.addCase(fetchReadPokemos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReadPokemos.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = {};
      state.pokemos = payload;
    });
    builder.addCase(fetchReadPokemos.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.pokemos = [];
    });
}
});
 export default homeSlice.reducer;