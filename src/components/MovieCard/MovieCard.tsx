import { FC } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import Poster from "../Poster/Poster";
import StarBorderIcon from "@mui/icons-material/StarBorder";

interface MovieCardProps {
  movie: any;
}

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  return (
    <Card sx={{ height: "100%" }}>
      <CardMedia sx={{ position: "relative" }}>
        <Poster img={movie.poster_path} style={{ objectFit: "contain" }} />
      </CardMedia>
      <CardContent >
        <Typography variant="subtitle2" sx={{minHeight: 90}}>{movie.name || movie.title}</Typography>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <StarBorderIcon color="secondary"/>
            <Typography ml={1}>{movie.vote_average}</Typography>
          </Stack>
          <Button size="small">Watch later</Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
