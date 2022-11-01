import React from "react"; // eslint-disable-line no-unused-vars
import InputLabel from "@mui/material/InputLabel";
import { Button, Paper, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { RadioGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Radio } from "@mui/material";
import { TextField } from "@mui/material";
import { Stack } from "@mui/system";
import PostCode from "../PostCode";
import { useState } from "react";

const Step1 = ({ setCurrentStepProp }) => {
  // 모달창, 주소api (false)
  const [openPostCode, setOpenPostCode] = useState(false);

  // React-Hook-Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm({
    defaultValues: {
      zoneCode: "",
      address: "",
    },
  });

  // 다음단계로 클릭했을 때 한페이지씩 이동
  const onSubmit = () => {
    console.log("step1다음으로 클릭 됨");
    setCurrentStepProp((prev) => prev + 1);
  };

  const openPostCodeModal = () => {
    setOpenPostCode(true);
  };

  // 인풋에 검색된 주소값 입력
  const PostCodeHandler = (data) => {
    console.log(data);
    setValue("address", data.address);
    setValue("zoneCode", data.zonecode);
  };

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
          <Stack spacing={3} sx={{ marginTop: "20px" }}>
            <Stack direction="row" sx={{ height: "37px" }}>
              <InputLabel sx={{ width: 150, lineHeight: "37px" }}>
                가맹점
              </InputLabel>
              <TextField
                id="franchisee"
                label="가맹점 이름"
                size="small"
                error={!!errors.franchisee}
                helperText={errors.franchisee ? errors.franchisee.message : ""}
                {...register("franchisee", {
                  required: "가맹점 이름은 필수값 입니다.",
                })}
              />
              <br />
            </Stack>

            <Stack
              direction="row"
              sx={{ height: "37px", alignItems: "center" }}
            >
              <InputLabel sx={{ width: 150 }}>개인/법인 구분</InputLabel>
              <RadioGroup row>
                <FormControlLabel
                  value="sole"
                  control={<Radio />}
                  label="개인"
                  {...register("sole", { required: true })}
                />
                <FormControlLabel
                  value="corporation"
                  control={<Radio />}
                  label="법인"
                  {...register("corporation", { required: true })}
                />
              </RadioGroup>
            </Stack>

            <Stack direction="row" sx={{ height: "37px" }}>
              <InputLabel sx={{ width: 150, lineHeight: "37px" }}>
                사업자등록번호
              </InputLabel>
              <TextField
                id="registNum"
                label="사업자등록번호"
                size="small"
                type="number"
                error={!!errors.registNum}
                helperText={errors.registNum ? errors.registNum.message : ""}
                {...register("registNum", {
                  required: "사업자 등록번호는 필수값 입니다.",
                })}
              />
            </Stack>

            <Stack direction="row" sx={{ height: "37px" }}>
              <InputLabel sx={{ width: 150, lineHeight: "37px" }}>
                가맹점 주소
              </InputLabel>
              <Controller
                name={"zoneCode"}
                control={control}
                rules={{ required: "우편번호는 필수값 입니다." }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    size="small"
                    sx={{ width: 200 }}
                    label="우편번호"
                    value={value}
                    onChange={onChange}
                    error={!!errors.zoneCode}
                    helperText={errors.zoneCode ? errors.zoneCode.message : ""}
                  />
                )}
              ></Controller>
              <Button
                sx={{ color: "black", background: "#eee", marginLeft: "20px" }}
                size="small"
                onClick={openPostCodeModal}
              >
                우편번호
              </Button>
              <br />
            </Stack>

            <Stack direction="row" sx={{ height: "37px" }}>
              <InputLabel sx={{ width: 150, lineHeight: "37px" }}></InputLabel>
              <Controller
                name={"Address"}
                control={control}
                rules={{ required: "주소는 필수값 입니다." }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    sx={{ width: 350 }}
                    size="small"
                    label="주소"
                    value={value}
                    onChange={onChange}
                    error={!!errors.Address}
                    helperText={errors.Address ? errors.Address.message : ""}
                  />
                )}
              ></Controller>
            </Stack>

            <Stack direction="row" sx={{ height: "37px" }}>
              <InputLabel sx={{ width: 150, lineHeight: "37px" }}></InputLabel>
              <TextField
                id="detailAddress"
                sx={{ width: 350 }}
                size="small"
                label="상세주소"
                error={!!errors.detailAddress}
                helperText={
                  errors.detailAddress ? errors.detailAddress.message : ""
                }
                {...register("detailAddress", {
                  required: "상세주소는 필수값 입니다.",
                })}
              />
            </Stack>

            <PostCode
              openPostCode={openPostCode}
              setOpenPostCode={setOpenPostCode}
              PostCodeHandler={PostCodeHandler}
            />

            <Stack direction="row" sx={{ height: "37px" }}>
              <InputLabel sx={{ width: 150, lineHeight: "37px" }}>
                가맹점 전화번호
              </InputLabel>
              <TextField
                id="franchiseeNum"
                label="전화번호"
                size="small"
                type="number"
                error={!!errors.franchiseeNum}
                helperText={
                  errors.franchiseeNum ? errors.franchiseeNum.message : ""
                }
                {...register("franchiseeNum", {
                  required: "전화번호는 필수값 입니다.",
                })}
              />
            </Stack>

            <Stack direction="row" sx={{ height: "37px" }}>
              <InputLabel sx={{ width: 150, lineHeight: "37px" }}>
                가맹점 팩스번호
              </InputLabel>
              <TextField
                id="franchiseeFaxNum"
                label="팩스번호"
                size="small"
                type="number"
                error={!!errors.franchiseeFaxNum}
                helperText={
                  errors.franchiseeFaxNum ? errors.franchiseeFaxNum.message : ""
                }
                {...register("franchiseeFaxNum", {
                  required: "팩스번호는 필수값 입니다.",
                })}
              />
            </Stack>
          </Stack>

          <Stack
            direction="row"
            spacing={3}
            sx={{ marginTop: 5, justifyContent: "center" }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{ width: 200, color: "white" }}
            >
              임시저장
            </Button>

            <Button type="submit" variant="outlined">
              다음 {">"}
            </Button>
          </Stack>
        </form>
      </Paper>
      <style>{`
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        * {
          font-size: 14px;
        }
      `}</style>
    </>
  );
};
export default Step1;
