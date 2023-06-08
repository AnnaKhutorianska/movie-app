import { Grid, Paper, Typography, Button } from "@mui/material";
import Link from "next/link";
import { FC } from "react";
import FilmCard from "../FilmCard";
import { pathes } from "@/path";


interface FilmsListWithCategoryProps {
  category: string;
  films: any;
  path: string,
}

const FilmsListWithCategory: FC<FilmsListWithCategoryProps> = ({
  category,
  films,
  path,
}) => {
  return (
    <>
      <Link href={`/${path}`}>
        <Button>{category}</Button>
      </Link>

      <Grid container justifyContent='space-between' alignItems="center" spacing={2}>
        {films.map((film) => (
          <Grid item key={film.id}>
            <Link href={`${path}/${film.id}`}>
              <FilmCard film={film}/>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default FilmsListWithCategory;
