import React from "react";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import Merchant from "./pages/Merchant";

const theme = createTheme({
  palette: {
    background: {
      default: "#eeeeee",
    },
    primary: {
      main: "#FF6634",
    },
    secondary: {
      main: "#35BA9B",
    },
    success: {
      main: "#3AADD9",
    },
    error: {
      main: "#D94452",
    },
    info: {
      main: "#DCDCDC",
    },
    warning: {
      main: "#FDCD56",
    },
  },
});

export const FormSample = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            width: "100%",
            height: 300,
            background: "#ff6634",
            p: 3,
            boxSizing: "border-box",
          }}
        >
          <Merchant />
        </Box>
      </ThemeProvider>
    </>
  );
};
