import { getMovieDetails } from "@/services/Api";
import { GetServerSideProps, NextPage } from "next";


const FilmPage: NextPage = ({ details }) => {
  console.log('details', details);

  return <div>FilmPage</div>;
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
