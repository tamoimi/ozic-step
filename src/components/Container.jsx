import { Stack } from "@mui/system";
import React from "react";
import { Navigation } from "./Navigation";
import StepBody from "./StepBody";
import StepHeader from "./StepHeader";

const Container = () => {
  return (
    <Stack direction="row" spacing={3}>
      <Navigation />
    <Stack spacing={3}>
      <StepHeader />
      <StepBody />
    </Stack>
    </Stack>
  );
};
export default Container;
