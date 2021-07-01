import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';
import { Themes } from './themes';

export const themeSlice = createSlice({
  name: 'activeTheme',
  initialState: Themes[0],
  reducers: {
    setTheme: (state, action: PayloadAction<number>) => {
      // eslint-disable-next-line no-param-reassign, @typescript-eslint/no-unused-vars
      state = Themes[action.payload];
      return state;
    },
  },
});

export const { actions: { setTheme } } = themeSlice;
export const { reducer } = themeSlice;

export default configureStore({
  reducer: {
    themeSlice: reducer,
  },
});
