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
  //step이동
  const [currentStep, setCurrentStep] = useState(1);

  //data를 보내주고 받음
  const [data, setData] = useState({});
  console.log("부모의 data", data);

  return (
    <Stack direction="row" spacing={3}>
      <Navigation />
      <Grid container>
        {/* stepper activeStep은 0부터 시작하기 때문에 => 현재스텝 -1 */}
        <StepHeader currentStep={currentStep - 1} />

        {/* 임시로  step2 미리보기 해놓음 나중에 step1 로 다시 바꾸기 */}
        <Grid container>
          {currentStep === 1 ? (
            <Step1
              setCurrentStepProp={setCurrentStep}
              dataProp={data}
              setDataProp={setData}
            />
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
