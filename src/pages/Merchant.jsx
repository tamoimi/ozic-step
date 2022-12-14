import StepHeader from "../components/StepHeader";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import Step1 from "../components/Merchants/Step1";
import Step2 from "../components/Merchants/Step2";
import Step3 from "../components/Merchants/Step3";
import Step4 from "../components/Merchants/Step4";

const Merchant = () => {
  //step이동
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <Grid container>
      {/* stepper activeStep은 0부터 시작하기 때문에 => 현재스텝 -1 */}
      {currentStep === 0 ? <></> : <StepHeader currentStep={currentStep - 1} />}

      {/* 임시로  step2 미리보기 해놓음 나중에 step1 로 다시 바꾸기 */}
      <Grid container>
        {currentStep === 0 && <Step1 setCurrentStepProp={setCurrentStep} />}
        {currentStep === 1 && <Step1 setCurrentStepProp={setCurrentStep} />}
        {currentStep === 2 && <Step2 setCurrentStepProp={setCurrentStep} />}
        {currentStep === 3 && <Step3 setCurrentStepProp={setCurrentStep} />}
      </Grid>
    </Grid>
  );
};
export default Merchant;
