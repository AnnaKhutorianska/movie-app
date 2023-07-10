import { pathes } from "@/path";
import { getMovies } from "@/services/Api";
import { Pagination } from "@mui/material";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

const Movies: NextPage = ({ movies }) => {
  const router = useRouter()
  
  console.log(movies);
  return (
    <>
      <Pagination
        count={movies.total_pages}
        color="secondary"
        page={movies.page}
        onChange={(e, value) => router.replace({
          pathname: `${pathes.movie}`,
          query: { page: value },
        })}
      />
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

export default Movies;
