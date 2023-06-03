import Head from "next/head";

import FilmsList from "../components/FilmsListWithCategories/FilmsListWithCateroties";

const Home:NextPage = ({films}) => {
  console.log('====================================');
  console.log('films', films);
  console.log('====================================');
  return (
    <>
      <Head>
        <title>Movie App</title>
        <meta name="description" content="movie app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <FilmsList />
      </main>
    </>
  );
};

export default Home;

import { GetServerSideProps, NextPage } from 'next';
import { getTrendingPerson, getTrendingMovie, getTrendingTV } from "@/services/Api";


// Define a type for our product data
type Film = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'physical' | 'digital';
};

// Define a type for our props
interface FilmsProps {
  films: Film;
}

// Export the page component


// Export the getServerSideProps function with GetServerSideProps type
export const getServerSideProps: GetServerSideProps<{
  films: Film;
}> = async () => {
 
  const results = await Promise.all([getTrendingPerson(), getTrendingMovie(), getTrendingTV()])

  
  // // Parse the data
  // const product = data.product;

  // If the product is not found, return notFound - 404 page
  // if (product === null) {
  //   return {
  //     notFound: true,
  //   };
  // }

  // Return the product as props
  return {
    props: {
      films: results,
    },
  };
};