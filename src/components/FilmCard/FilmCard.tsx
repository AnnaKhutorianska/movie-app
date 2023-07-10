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

interface FilmCardProps {
  film: any;
}

const FilmCard: FC<FilmCardProps> = ({ film }) => {
  return (
    <Card sx={{ height: "100%" }}>
      <CardMedia sx={{ position: "relative" }}>
        <Poster img={film.poster_path} style={{ objectFit: "contain" }} />
      </CardMedia>
      <CardContent >
        <Typography variant="subtitle2" sx={{minHeight: 90}}>{film.name || film.title}</Typography>
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
            <Typography ml={1}>{film.vote_average}</Typography>
          </Stack>
          <Button size="small">Watch later</Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default FilmCard;
