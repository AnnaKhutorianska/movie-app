import Head from "next/head";

import { GetServerSideProps, NextPage } from "next";
import {
  getTrendingMovie,
  getTrendingTV,
  getGenresMovie,
  getGenresTV,
} from "@/services/Api";
import { FilmsResponse } from "@/types";
import FilmsListWithCategory from "../components/FilmsListWithCategory/FilmsListWithCategory";
import { pathes } from "@/path";
import { Divider } from "@mui/material";
import { store, wrapper } from "@/state/store";
import { genresFetch } from "@/state/modules/genres/actions";

const Home: NextPage<any> = ({ trendingMovies, trendingTV }) => {
  return (
    <>
      <Head>
        <title>Movie App</title>
        <meta name="description" content="movie app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <FilmsListWithCategory
          category="Movies"
          films={trendingMovies}
          path={pathes.movie}
        />
        <FilmsListWithCategory
          category="TV"
          films={trendingTV}
          path={pathes.tv}
        />
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<{
  films: any;
}> = wrapper.getServerSideProps((store) => async () => {
  try {
    const [trendingMovies, trendingTV] = await Promise.all([
      getTrendingMovie(),
      getTrendingTV(),
    ]);

    await store.dispatch(genresFetch());

    return {
      props: {
        trendingMovies: trendingMovies.results,
        trendingTV: trendingTV.results,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
});
