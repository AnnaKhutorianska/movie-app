
import { AppBar, AppBarProps, Theme, styled } from '@mui/material';
import { makeStyles } from '@mui/styles';

interface HeaderBarProps extends AppBarProps {
  open?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  logo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
    gap: 150,
  },
}));

export default useStyles;

export const HeaderBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<HeaderBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${240}px)`,
    marginLeft: `${240}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));