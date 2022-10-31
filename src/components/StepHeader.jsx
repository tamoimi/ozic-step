import React from "react";
import { Stepper } from "@mui/material";
import { Step } from "@mui/material";
import { StepLabel } from "@mui/material";
import { Box } from "@mui/material";
import { Paper } from "@mui/material";

const steps = [
  "기본 정보 입력",
  "세부 정보 입력",
  "은행 정보 입력",
  "대표자 정보 입력",
  "담당자 정보 입력",
  "파일 업로드",
  "계약서 다운로드",
];

const StepHeader = ({ currentStep }) => {
  return (
    <>
      <Paper sx={{ width: "100%", alignItems: "" }} >
        <Box>
          <Stepper activeStep={currentStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Paper>
    </>
  );
};
export default StepHeader;
