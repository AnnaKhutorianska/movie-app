import { Button, Card, CardActions, CardContent, CardMedia, Paper, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { FC } from "react";

const FilmCard: FC<any> = ({ film }) => {
  console.log('====================================');
  console.log('film', film);
  console.log('====================================');
  return (
    <Paper>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          {/* <Typography component="div">
            {film.name}
          </Typography> */}
          <Typography>
            {film.name}
            <StarIcon />
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Paper>
  );
};

export default FilmCard;
