import { Box, Typography } from "@mui/material";

const NotFoundPage = () => {
  return (
    <Box display="flex" flexDirection='column' justifyContent="center" alignItems="center">
      <img src="/404_error.png" />
      <Typography>The page you were looking for does not exist</Typography>
    </Box>
  );
};

export default NotFoundPage;
