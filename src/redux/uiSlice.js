import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    activePage: 'button',
  },
  reducers: {
    setActivePage(state, action) {
      state.activePage = action.payload;
    },
  },
});

export const { setActivePage } = uiSlice.actions;
export default uiSlice.reducer;
