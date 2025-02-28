import { BorderBottom, BorderColor } from "@mui/icons-material";
import { createTheme, Theme } from "@mui/material/styles";

const theme: Theme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        size: "small",
      },
    },

    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: "13px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& fieldset": {
            borderColor: "#eee",
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {},
    },
    MuiInput: {
      styleOverrides: {
        root: {
          "&:before": {
            borderBottom: "1px solid #eee",
          },
        },
      },
    },
  },
  typography: {
    button: {
      textTransform: "initial",
    },
  },
  palette: {
    primary: {
      main: "#32dada",
      light: "#70e5e5",
      dark: "#26d0d0",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ad2761",
      light: "#e6bed0",
      dark: "#931745",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#ed0434",
      light: "#fab4c2",
      dark: "#e00115",
      contrastText: "ffffff",
    },
    background: {
      default: "#061833",
      paper: "#23364d",
    },
    text: {
      primary: "#faf8ff",
      secondary: "#b7b7b7",
    },
    action: {
      disabledBackground: "#196D6D",
    },
    // custom: {
    //   deep: "#061833",
    //   smokey: "#23364d",
    //   grey: "#b7b7b7",
    //   yellow: "#f9f871",
    //   red: "#ed0434",
    //   blue: "#00c1ec",
    //   green: "#5dbe7c",
    //   orange: "#ff8749",
    // },
  },
});

export default theme;
