import { MediaType } from "@/types";
import { GenresState } from "@/types/state";

export const getGenreType = (
  genres: GenresState,
  media_type: MediaType,
  ids: number[]
) => {
  if (media_type === MediaType.TV)
    return genres.tvGenres.reduce((acc, elem) => {
      if (ids.includes(elem.id)) acc.push(elem.name);
      return acc
    }, [] as string[]);

  if (media_type === MediaType.MOVIE)
    return genres.moviesGenres.reduce((acc, elem) => {
      if (ids.includes(elem.id)) acc.push(elem.name);
      return acc
    }, [] as string[]);
};
