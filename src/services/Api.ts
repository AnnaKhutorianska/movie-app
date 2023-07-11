import axios from "axios";

const baseURL = "https://api.themoviedb.org/3";

const Api = axios.create({
  baseURL,
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOThmYTQxYTU2ZmVlOTM3ZWRlZWExMmQ3ZTIzZDEwZCIsInN1YiI6IjY0Nzg3NWVkY2Y0YjhiMDEyMjc0OGU4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uql-Mo6thAtauedXZFChtxS7QKqWqQy2ESdwKqxHz10",
  },
});

export const getTrendingPerson = async () => {
  const { data } = await Api.get("/trending/person/day");
  return data;
};

export const getTrendingMovie = async () => {
  const { data } = await Api.get("/trending/movie/day");
  return data;
};

export const getTrendingTV = async () => {
  const { data } = await Api.get("/trending/tv/day");
  return data;
};

export const getMovieDetails = async (movie_id: string) => {
  const { data } = await Api.get(`/movie/${movie_id}`);
  return data;
};

export const getTVDetails = async (series_id: string) => {
  const { data } = await Api.get(`/tv/${series_id}`);
  return data;
};

export const getGenresMovie = async () => {
  const { data } = await Api.get('/genre/movie/list?language=en')
  return data;
}

export const getGenresTV = async () => {
  const { data } = await Api.get('/genre/tv/list?language=en')
  return data;
}

export const getMovies = async (page: number) => {
  const { data } = await Api.get(`/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`)
  return data;
}

export const getTVs = async (page: number) => {
  const { data } = await Api.get(`/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc`)
  return data;
}

