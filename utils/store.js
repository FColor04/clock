import { createSlice, configureStore } from "@reduxjs/toolkit";
import { lightTheme, darkTheme, pearTheme } from "../utils/themes";

export const themeSlice = createSlice({
  name: "activeTheme",
  initialState: {
    theme: lightTheme,
  },
  reducers: {
    setLightTheme: (state) => {
      state.theme = lightTheme;
    },
    setDarkTheme: (state) => {
      state.theme = darkTheme;
    },
    setPearTheme: (state) => {
      state.theme = pearTheme;
    },
  },
});
export const { setLightTheme, setDarkTheme, setPearTheme } = themeSlice.actions;
export const reducer = themeSlice.reducer;

export default configureStore({
  reducer: {
    themeSlice: reducer,
  },
});
