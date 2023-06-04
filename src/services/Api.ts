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
