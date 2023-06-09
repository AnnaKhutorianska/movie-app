/// <reference no-default-lib="true"/>

import { createTheme } from "@mui/material";

export const palette = {
  primary: {
    main: "#adb5bd",
  },
  secondary: {
    main: "#f5cb5c",
  },
  text: {
    primary: "#1F293D",
    secondary: "#828282",
  },
  background: {
    // main: "#4f518c",
    paper: "#fff",
    default: "#FBFDFF",
  },
  custom: {
    border: "#D4D8DF",
    label: "#7E8086",
    error: "#f44336",
  },
};

const defaultTheme = createTheme();

const theme = createTheme({
  palette,
  typography: {
    fontFamily: "Oxygen",
    subtitle1: {
      fontSize: 18,
      fontWeight: 700,
      [defaultTheme.breakpoints.up("md")]: {
        fontSize: 20,
      },
    },
    subtitle2: {
      fontSize: 16,
      fontWeight: 700,
      [defaultTheme.breakpoints.up("md")]: {
        fontSize: 18,
      },
    },
    body1: {
      fontSize: 15,
      [defaultTheme.breakpoints.up("md")]: {
        fontSize: 16,
      },
    },
    body2: {
      fontSize: 16,
      fontWeight: 600,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          height: 70,
          // backgroundColor: 'red'
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#adb5bd',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          width: 240,
          // height: 450,
          // borderRadius: "100px",
          // boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
        },
      },
    },
  },
  // overrides: {
  //   MuiAppBar: {
  //     root: {
  //       boxShadow: 'none',
  //     },
  //     colorDefault: {
  //       backgroundColor: '#fff',
  //     },
  //   },
  //   MuiDrawer: {
  //     paper: {
  //       minWidth: '300px',
  //       maxWidth: '304px',
  //     },
  //   },
});

export default theme;
