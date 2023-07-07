import Poster from "@/components/Poster";
import { getMovieDetails } from "@/services/Api";
import { useAppSelector } from "@/state/hooks";
import { getGenreType } from "@/utils";
import { Box, Stack, Typography } from "@mui/material";
import { GetServerSideProps, NextPage } from "next";

const FilmPage: NextPage = ({ details }) => {
  console.log("details", details);
  const genres = useAppSelector((state) => state.genres.tvGenres);
  // getGenreType(genres, film.media_type, film.genre_ids)
  return (
    <>
      <Typography variant="subtitle1">{details.original_title}</Typography>
      <Stack flexDirection="row">
        <Poster
          img={details.poster_path}
          style={{ width: "400px", height: "500px" }}
        />
        <Stack>
          <Box>
            <Typography>Date:</Typography>
            <Typography variant="body1">{details.release_date}</Typography>
          </Box>
          <Box>
            <Typography>Country:</Typography>
            {details.production_countries.map((country) => (
              <Typography key={country.name} variant="body1">
                {country.name}
              </Typography>
            ))}
          </Box>
          <Box>
            <Typography>Genre:</Typography>
            {details.genres.map((genre) => (
              <Typography key={genre.id}>{genre.name}</Typography>
            ))}
          </Box>
          <Box>
            <Typography>Duration:</Typography>
            <Typography variant="body1">{details.runtime}</Typography>
          </Box>
        </Stack>
      </Stack>
        <Box>
          <Typography>Story:</Typography>
          <Typography variant="body1">{details.overview}</Typography>
        </Box>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<{
  film: any;
}> = async ({ query }) => {
  const { id } = query;
  try {
    const result = await getMovieDetails(id);
    return {
      props: {
        details: result,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default FilmPage;
