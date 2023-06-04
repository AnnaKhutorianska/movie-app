import { Grid, Paper, Typography } from "@mui/material";
import Link from "next/link";
import { FC } from "react";

interface FilmsListWithCategoryProps {
  category: string;
  films: any;
}

const FilmsListWithCategory: FC<FilmsListWithCategoryProps> = ({
  category,
  films,
}) => {
  return (
    <>
      <Link href={`/${category}`}><Typography>{category}</Typography></Link>

      <Grid
        container
        spacing={2}
      >
        {films.map((film) => (
          <Grid item xs={2}>
            <Paper elevation={3}>wqw</Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default FilmsListWithCategory;
