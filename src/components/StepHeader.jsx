import React from "react";
import { Stepper } from "@mui/material";
import { Step } from "@mui/material";
import { StepLabel } from "@mui/material";
import { Box } from "@mui/material";
import { Paper } from "@mui/material";

const steps = [
  { id: "step1", title: "기본 정보 입력" },
  { id: "step2", title: "세부 정보 입력" },
  { id: "step3", title: "은행 정보 입력" },
  { id: "step4", title: "대표자 정보 입력" },
  { id: "step5", title: "담당자 정보 입력" },
  { id: "step6", title: "파일 정보 입력" },
  { id: "step7", title: "계약서 다운로드" },
];

const StepHeader = ({ currentStep }) => {
  return (
    <>
      <Paper sx={{ width: "100%", height: 150, borderRadius: 4, marginTop: 8}}>
        <Box sx={{ marginTop: "40px" }}>
          <Stepper activeStep={currentStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label.id}>
                <StepLabel>
                  {label.id}
                  <br />
                  {label.title}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Paper>
    </>
  );
};
export default StepHeader;
