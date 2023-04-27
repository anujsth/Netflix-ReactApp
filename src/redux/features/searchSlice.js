import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchVal: " ",
  },
  reducers: {
    searchHandler: (state, action) => {
      state.searchVal = action.payload;
    },
  },
});

export const { searchHandler } = searchSlice.actions;
export default searchSlice.reducer;
