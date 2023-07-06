import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// import { CompanyPayload, CompanyState } from '~/interfaces/Company'
import { genresFetch } from "./actions";
import { GenresState } from "@/types/state";

const initialState: GenresState = {
  tvGenres: [],
  moviesGenres: [],
  loaded: false,
  loading: false,
  error: null,
};

const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(genresFetch.pending, (state) => {
      state.loading = true;
      state.loaded = false;
    });
    builder.addCase(genresFetch.fulfilled, (state, { payload = [] }) => {
      state.loading = false;
      state.loaded = true;
      const [moviesGenres, tvGenres] = payload;
      state.tvGenres = tvGenres.genres;
      state.moviesGenres = moviesGenres.genres;
    });
    builder.addCase(genresFetch.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error;
    });
  },
});

export default genresSlice.reducer;
