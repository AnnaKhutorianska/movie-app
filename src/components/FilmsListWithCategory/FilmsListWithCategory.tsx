import {
  Grid,
  Paper,
  Typography,
  Button,
  Link as MuiLink,
} from "@mui/material";
import Link from "next/link";
import { FC } from "react";
import FilmCard from "../FilmCard";
import { pathes } from "@/path";

interface FilmsListWithCategoryProps {
  category: string;
  films: any;
  path: string;
}

const FilmsListWithCategory: FC<FilmsListWithCategoryProps> = ({
  category,
  films,
  path,
}) => {
  return (
    <>
      <Link href={`/${path}`}>
        <Button variant="contained" color="secondary">
          {category}
        </Button>
      </Link>
      <Grid
        container
        justifyContent="space-between"
        alignItems="stretch"
        spacing={2}
        my={2}
      >
        {films.map((film) => (
          <Grid item key={film.id}>
            <MuiLink
              href={`${path}/${film.id}`}
              component={Link}
              sx={{
                height: "100%",
                display: "inline-block",
                textDecoration: "none",
              }}
            >
              <FilmCard film={film} />
            </MuiLink>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default FilmsListWithCategory;
