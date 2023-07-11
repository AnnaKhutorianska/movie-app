import { FC } from "react";
import { Button } from "@mui/material";
import Link from "next/link";
import MovieList from "../MovieList/MovieList";

interface MovieListWithCategoryProps {
  category: string;
  movies: any;
  path: string;
}

const MovieListWithCategory: FC<MovieListWithCategoryProps> = ({
  category,
  movies,
  path,
}) => {
  return (
    <>
      <Link href={{ pathname: `${path}`, query: { page: 1 } }}>
        <Button variant="contained" color="secondary">
          {category}
        </Button>
      </Link>
      <MovieList movies={movies} path={path} />
    </>
  );
};

export default MovieListWithCategory;
