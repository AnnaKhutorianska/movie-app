import MovieList from "@/components/MovieList/MovieList";
import { pathes } from "@/path";
import { getTVs } from "@/services/Api";
import { Pagination, Stack } from "@mui/material";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

const MoviesPage: NextPage = ({ tvs }) => {
  const router = useRouter();

  // console.log(tvs);
  return (
    <>
      <MovieList movies={tvs.results} path={pathes.tv}/>
      <Stack alignItems="center">
        <Pagination
          count={tvs.total_pages}
          color="secondary"
          size="large"
          boundaryCount={2}
          page={tvs.page}
          onChange={(e, value) =>
            router.replace({
              pathname: `${pathes.tv}`,
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
    const result = await getTVs(page);
    return {
      props: {
        tvs: result,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default MoviesPage;
