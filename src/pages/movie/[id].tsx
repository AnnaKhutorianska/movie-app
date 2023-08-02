import Poster from "@/components/Poster";
import { getMovieDetails } from "@/services/Api";
import { Box, Stack, Typography } from "@mui/material";
import { GetServerSideProps, NextPage } from "next";

const FilmPage: NextPage = ({ details }) => {
  return (
    <>
      <Typography variant="subtitle1" mb={2}>{details.original_title}</Typography>
      <Stack flexDirection="row">
        <Poster
          img={details.poster_path}
          style={{ width: "400px", height: "500px" }}
        />
        <Stack spacing={2} ml={2}>
          <Box>
            <Typography variant="body2">Date:</Typography>
            <Typography variant="body1">{details.release_date}</Typography>
          </Box>
          <Box>
            <Typography variant="body2">Country:</Typography>
            {details.production_countries.map((country) => (
              <Typography key={country.name} variant="body1">
                {country.name}
              </Typography>
            ))}
          </Box>
          <Box>
            <Typography variant="body2">Genre:</Typography>
            {details.genres.map((genre) => (
              <Typography key={genre.id}>{genre.name}</Typography>
            ))}
          </Box>
          <Box>
            <Typography variant="body2">Duration:</Typography>
            <Typography variant="body1">{details.runtime}</Typography>
          </Box>
        </Stack>
      </Stack>
        <Box>
          <Typography variant="body2">Story:</Typography>
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
