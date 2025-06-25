import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isMobile: window.innerWidth <= 375,
    isMenuOpen: false,
  },
  reducers: {
    openMenu(state) {
      state.isMenuOpen = true;
    },
    closeMenu(state) {
      state.isMenuOpen = false;
    },
    toggleMenu(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
