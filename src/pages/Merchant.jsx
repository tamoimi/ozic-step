import Stack from "@mui/material/Stack";
import { Navigation } from "../components/Navigation";
import StepHeader from "../components/StepHeader";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import Step1 from "../components/Merchants/Step1";
import Step2 from "../components/Merchants/Step2";
import Step3 from "../components/Merchants/Step3";
import Step4 from "../components/Merchants/Step4";

const Merchant = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState();
  return (
    <Stack direction="row" spacing={3}>
      <Navigation />
      <Grid container>
        {/* stepper activeStep은 0부터 시작하기 때문에 => 현재스텝 -1 */}
        <StepHeader currentStep={currentStep - 1} />

        <Grid container sx={{ marginTop: "20px" }}>
          {currentStep === 1 ? (
            <Step1 setCurrentStepProp={setCurrentStep} />
          ) : currentStep === 2 ? (
            <Step2 setCurrentStepProp={setCurrentStep} />
          ) : currentStep === 3 ? (
            <Step3 setCurrentStepProp={setCurrentStep} />
          ) : (
            <Step4 setCurrentStepProp={setCurrentStep} />
          )}
        </Grid>
      </Grid>
    </Stack>
  );
};
export default Merchant;
