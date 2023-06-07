import { Grid, Paper, Typography } from "@mui/material";
import Link from "next/link";
import { FC } from "react";
import FilmCard from "../FilmCard";
import { path } from "@/path";


interface FilmsListWithCategoryProps {
  category: string;
  films: any;
}

const FilmsListWithCategory: FC<FilmsListWithCategoryProps> = ({
  category,
  films,
}) => {
  console.log('films', films);
  return (

    <>
      <Link href={`/${category}`}>
        <Typography>{category}</Typography>
      </Link>

      <Grid container justifyContent="center" alignItems="center" spacing={3}>
        {films.map((film) => (
          <Grid item key={film.id}>
            <Link href={`${path.film}/${film.id}`}>
              <FilmCard film={film}/>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default FilmsListWithCategory;
