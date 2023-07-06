import { SerializedError } from "@reduxjs/toolkit";

interface Genre {
  id: number;
  name: string;
}

export interface GenresState {
  tvGenres: Genre[];
  moviesGenres: Genre[];
  loading: boolean;
  loaded: boolean;
  error: null | SerializedError;
}

export interface GenrePayload {
  genres: Genre[]
}
