import MovieList from "@/components/MovieList/MovieList";
import { pathes } from "@/path";
import { getMovies } from "@/services/Api";
import { Pagination, Stack } from "@mui/material";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

const MoviesPage: NextPage = ({ movies }) => {
  const router = useRouter();

  console.log(movies);
  return (
    <>
      <MovieList movies={movies.results} />
      <Stack alignItems="center">
        <Pagination
          count={movies.total_pages}
          color="secondary"
          size="large"
          boundaryCount={2}
          page={movies.page}
          onChange={(e, value) =>
            router.replace({
              pathname: `${pathes.movie}`,
              query: { page: value },
            })
          }
        />
      </Stack>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<{
  film: any;
}> = async ({ query }) => {
  const { page } = query;
  try {
    const result = await getMovies(page);
    return {
      props: {
        movies: result,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default MoviesPage;
