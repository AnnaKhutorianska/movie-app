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

const FilmCard: FC<any> = ({ film }) => {
  console.log("====================================");
  console.log("film", film);
  console.log("====================================");
  return (
    <Paper>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ position: "relative" }}>
          <Poster
            img={film.poster_path}
            style={{ objectFit: "cover" }}
          />
        </CardMedia>
        <CardContent>
          {/* <Typography component="div">
            {film.name}
          </Typography> */}
          <Typography>
            {film.name || film.title}
          </Typography>
          <Typography>

          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Watch later</Button>
        </CardActions>
      </Card>
    </Paper>
  );
};

export default FilmCard;
