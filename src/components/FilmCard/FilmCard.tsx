import { FC } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";
import Poster from "../Poster/Poster";
import { useAppSelector } from "@/state/hooks";
import { getGenreType } from "@/utils";

const FilmCard: FC<any> = ({ film }) => {
  const genres = useAppSelector((state) => state.genres);

  console.log(film);
  return (
    <Paper>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ position: "relative" }}>
          <Poster img={film.poster_path} style={{ objectFit: "cover" }} />
        </CardMedia>
        <CardContent>
          {/* <Typography component="div">
            {film.name}
          </Typography> */}
          <Typography variant="subtitle2">{film.name || film.title}</Typography>
          {getGenreType(genres, film.media_type, film.genre_ids)?.map(
            (genre) => (
              <Typography key={genre}>{genre}</Typography>
            )
          )}
        </CardContent>
        <CardActions>
          <Button size="small">Watch later</Button>
        </CardActions>
      </Card>
    </Paper>
  );
};

export default FilmCard;
