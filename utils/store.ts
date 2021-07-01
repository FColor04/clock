import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { Themes } from "./themes";

export const themeSlice = createSlice({
  name: "activeTheme",
  initialState: {
    theme: Themes[0],
  },
  reducers: {
    setTheme: (state, action: PayloadAction<number>) => {
      state.theme = Themes[action.payload];
    }
  },
});
export const { setTheme } = themeSlice.actions;
export const reducer = themeSlice.reducer;

export default configureStore({
  reducer: {
    themeSlice: reducer,
  },
});
