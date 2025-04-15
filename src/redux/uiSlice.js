import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    activePage: 'page1', // Default page
    componentData: {},
  },
  reducers: {
    setActivePage(state, action) {
      state.activePage = action.payload;
    },
    setComponentData(state, action) {
      state.componentData = action.payload;
    },
  },
});

export const { setActivePage, setComponentData } = uiSlice.actions;
export default uiSlice.reducer;