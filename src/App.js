import React from "react";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import Merchant from "./pages/Merchant";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import { Navigation } from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import FranchiseesList from "./pages/MerchantsList";

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
        <CssBaseline />
        <Box
          sx={{
            width: "100%",
            height: 300,
            background: "#ff6634",
            p: 3,
            boxSizing: "border-box",
          }}
        >
          <Stack direction="row">
            <Navigation />
            {/* <Merchant /> */}
            <Routes>
              <Route path="/" exact element={<Merchant />} />
              <Route path="/FranchiseesList" element={<FranchiseesList />} />
            </Routes>
          </Stack>
        </Box>
      </ThemeProvider>
    </>
  );
};
