import React from "react"; // eslint-disable-line no-unused-vars
import { Button, Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { RadioGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Radio } from "@mui/material";
import { TextField } from "@mui/material";
import { Stack } from "@mui/system";

const StepBody = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Paper
        sx={{
          width: "100%",
          boxSizing: "border-box",
          p: 3,
        }}
      >
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          기본 정보 입력
        </Typography>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <Stack direction="row">
              <label>가맹점</label>
              <TextField
                id="franchisee-id"
                label="가맹점"
                variant="outlined"
                color="primary"
                {...register("franchisee", { required: true })}
              />
              {errors.franchisee && <span>This field is required</span>} <br />
            </Stack>

            <Stack direction="row">
              <label>개인/법인 구분</label>
              <RadioGroup row>
                <FormControlLabel
                  value="sole"
                  control={<Radio color="primary" />}
                  label="개인"
                  {...register("sole", { required: true })}
                />
                <FormControlLabel
                  value="corporation"
                  control={<Radio color="primary" />}
                  label="법인"
                  {...register("corporation", { required: true })}
                />
              </RadioGroup>
            </Stack>

            <Stack direction="row">
              <label>사업자등록번호</label>
              <TextField
                id="registNum-id"
                label="사업자등록번호"
                variant="outlined"
                type="number"
                color="primary"
                {...register("registNum", { required: true })}
              />
              {errors.registNum && <span>꼭 필요!</span>} <br />
            </Stack>

            <Stack direction="row">
              <label>가맹점 주소</label>
              <TextField
                id="franchiseeAd-id"
                label="가맹점주소"
                variant="outlined"
                color="primary"
                {...register("franchiseeAd", { required: true })}
              />
              {errors.franchisee && <span>This field is required</span>} <br />
            </Stack>

            <Stack direction="row">
              <label>가맹점 전화번호</label>
              <TextField
                id="franchiseeNum-id"
                label="전화번호"
                variant="outlined"
                type="number"
                color="primary"
                {...register("franchiseeNum", { required: true })}
              />
              {errors.franchisee && <span>This field is required</span>} <br />
            </Stack>

            <Stack direction="row">
              <label>가맹점 팩스번호</label>
              <TextField
                id="franchiseeFaxNum-id"
                label="팩스번호"
                variant="outlined"
                type="number"
                color="primary"
                {...register("franchiseeFaxNum", { required: true })}
              />
              {errors.franchisee && <span>This field is required</span>} <br />
            </Stack>
          </Stack>

          <Stack direction="row" spacing={3} sx={{ marginTop: 3 }}>
            <Button type="submit" variant="contained" sx={{ color: "white" }}>
              임시저장
            </Button>
            <Button type="submit" variant="outlined">
              다음 {">"}{" "}
            </Button>
          </Stack>
        </form>
      </Paper>
      <style>{`
          label {
            width: 150px;
          }
          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
      `}</style>
    </>
  );
};
export default StepBody;
