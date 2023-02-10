import { createSlice } from "@reduxjs/toolkit";
import { fetchReadGames } from "../thunks/gameThunk";

const initialState = {
    loading: false,
    error: {},
    games: []

};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    builder.addCase(fetchReadGames.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReadGames.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = {};
      state.games = payload;
    });
    builder.addCase(fetchReadGames.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.games = [];
    });
}
});
 export default gameSlice.reducer;