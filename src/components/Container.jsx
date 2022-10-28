import { Stack } from "@mui/system";
import React from "react";
import { Navigation } from "./Navigation";
import StepBody from "./StepBody";
import StepHeader from "./StepHeader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Step2Body from "./Step2Body";

const Container = () => {
  return (
    <Stack direction="row" spacing={3}>
      <Navigation />
      <Stack spacing={3}>
        <StepHeader />
        {/* <StepBody /> */}
        <Routes>
          <Route path="/" element={<StepBody />} />
          <Route path="/Step2Body" element={<Step2Body />} />
        </Routes>
      </Stack>
    </Stack>
  );
};
export default Container;
