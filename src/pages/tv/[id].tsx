import { getMovieDetails, getTVDetails } from "@/services/Api";
import { GetServerSideProps, NextPage } from "next";


const TVPage: NextPage = ({ details }) => {
  console.log('details', details);

  return <div>TVPage</div>;
};

export const getServerSideProps: GetServerSideProps<{
  film: any;
}> = async ({ query }) => {
  const { id } = query;
  try {
    const result = await getTVDetails(id);
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

export default TVPage;
