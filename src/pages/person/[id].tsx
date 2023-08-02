import Poster from "@/components/Poster";
import { getMovieDetails } from "@/services/Api";
import { Box, Stack, Typography } from "@mui/material";
import { GetServerSideProps, NextPage } from "next";

const PersonPage: NextPage = () => {
  return (
    <>
      <Typography variant="subtitle1" mb={2}>person</Typography>
      
    </>
  );
};

export const getServerSideProps: GetServerSideProps<{
  film: any;
}> = async ({ query }) => {
  const { id } = query;
  try {
    // const result = await getMovieDetails(id);
    return {
      props: {
        details: [],
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default PersonPage;
