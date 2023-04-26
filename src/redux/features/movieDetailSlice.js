import { createSlice } from "@reduxjs/toolkit";

const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState: {
    name: "",
    id: "",
  },
  reducers: {
    setMovieName: (state, action) => {
      state.name = action.payload;
    },
    setMovieId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { setMovieId, setMovieName } = movieDetailSlice.actions;
export default movieDetailSlice.reducer;
