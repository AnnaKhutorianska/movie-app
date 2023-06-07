import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'

const FilmPage: NextPage = () => {
  const { query: {id} } = useRouter()

  console.log(id);

  return (
    <div>FilmPage</div>
  )
}

export const getServerSideProps: GetServerSideProps<{
  film: any;
}> = async () => {
  try {
   

    return {
      props: {
        
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};


export default FilmPage