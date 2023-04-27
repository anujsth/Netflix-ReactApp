import { createSlice } from "@reduxjs/toolkit";

const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState: {
    name: "",
    id: "",
    allMovie: "",
  },
  reducers: {
    setMovieName: (state, action) => {
      state.name = action.payload;
    },
    setMovieId: (state, action) => {
      state.id = action.payload;
    },
    setAllMovie: (state, action) => {
      state.allMovie = [...state.allMovie, ...action.payload];
    },
    removeAllMovie: (state) => {
      state.allMovie = "";
    },
  },
});

export const { removeAllMovie, setMovieId, setMovieName, setAllMovie } =
  movieDetailSlice.actions;
export default movieDetailSlice.reducer;
