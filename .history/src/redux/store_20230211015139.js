import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './slices/homeSlice';
import gameReducer from './slices/gameSlice';
import actorReducer from './slices/actorSlice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    game: gameReducer,
    actor: actorReducer
  },

});