import React from "react";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const steps = [
  { id: "STEP 1", title: "기본 정보 입력" },
  { id: "STEP 2", title: "세부 정보 입력" },
  { id: "STEP 3", title: "은행 정보 입력" },
  { id: "STEP 4", title: "대표자 정보 입력" },
  { id: "STEP 5", title: "담당자 정보 입력" },
  { id: "STEP 6", title: "파일 정보 입력" },
  { id: "STEP 7", title: "계약서 다운로드" },
];

const StepHeader = ({ currentStep }) => {
  return (
    <>
      <Paper sx={{ width: "100%", height: 150, borderRadius: 4, marginTop: 8 }}>
        <Box sx={{ marginTop: "40px" }}>
          <Stepper activeStep={currentStep} alternativeLabel >
            {steps.map((label) => (
              <Step key={label.id}>
                <StepLabel>
                  <Typography>{label.id}</Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {label.title}
                  </Typography>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Paper>
      <style>{`
        .css-opt7yd-MuiStepIcon-text {
          fill: white;
        }
      `}</style>
    </>
  );
};
export default StepHeader;
