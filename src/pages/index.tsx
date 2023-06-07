import Head from "next/head";

import FilmsList from "../components/FilmsListWithCategory/FilmsListWithCategory";

import { GetServerSideProps, NextPage } from "next";
import {
  getTrendingPerson,
  getTrendingMovie,
  getTrendingTV,
} from "@/services/Api";
import { FilmsResponse } from "@/types";
import FilmsListWithCategory from "../components/FilmsListWithCategory/FilmsListWithCategory";

const Home: NextPage<any> = ({
  trendingPeople,
  trendingMovies,
  trendingTV,
}) => {
  console.log("films", trendingPeople, trendingMovies, trendingTV);

  return (
    <>
      <Head>
        <title>Movie App</title>
        <meta name="description" content="movie app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <FilmsListWithCategory category='People' films={trendingPeople} /> */}
        <FilmsListWithCategory category='Movies' films={trendingMovies} />
        <FilmsListWithCategory category='TV' films={trendingTV}/>
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<{
  films: any;
}> = async () => {
  try {
    const [trendingPeople, trendingMovies, trendingTV] = await Promise.all([
      getTrendingPerson(),
      getTrendingMovie(),
      getTrendingTV(),
    ]);

    return {
      props: {
        trendingPeople: trendingPeople.results,
        trendingMovies: trendingMovies.results,
        trendingTV: trendingTV.results,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
