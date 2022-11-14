import React, { useEffect } from "react"; // eslint-disable-line no-unused-vars
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Controller, useForm } from "react-hook-form";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import TextField from "@mui/material/TextField";
import Stack from "@mui/system/Stack";
import PostCode from "../PostCode";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar/Snackbar";
import Close from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Alert from "@mui/material/Alert/Alert";

const Step1 = ({ setCurrentStepProp, dataProp, setDataProp }) => {
  // 모달창, 주소api (false)
  const [openPostCode, setOpenPostCode] = useState(false);

  // snackBar
  const [snackOpen, setSnackOpen] = useState(false);

  const snackOpenClick = () => {
    setSnackOpen(true);
  };

  const snackBarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackOpen(false);
  };

  const action = (
    <>
      <Button size="small" onClick={snackBarClose}>
        닫기
      </Button>
      <IconButton size="small" onClick={snackBarClose}>
        <Close fontSize="small" />
      </IconButton>
    </>
  );

  // React-Hook-Form
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    control,
  } = useForm({
    defaultValues: {
      mallName: "",
      businessType: "",
      registrationNumber: "",
      postCode: "",
      mallAddress: "",
      detailAddress: "",
      phone: "",
      fax: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("step1다음으로 클릭 됨");
    // 다음단계로 클릭했을 때 한페이지씩 이동
    setCurrentStepProp((prev) => prev + 1);
    console.log(data);
  };

  const openPostCodeModal = () => {
    setOpenPostCode(true);
  };

  // 인풋에 검색된 주소값 입력
  const PostCodeHandler = (data) => {
    setValue("postCode", data.zonecode);
    setValue("mallAddress", data.address);
  };

  return (
    <>
      <Paper
        sx={{
          width: "100%",
          p: 3,
          borderRadius: 4,
          marginTop: 3,
          height: 650,
        }}
      >
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          기본 정보 입력
        </Typography>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack sx={{ marginTop: "20px" }}>
            <Stack direction="row" alignItems="center" height="60px">
              <InputLabel
                htmlFor="mallName"
                sx={{ width: 150, fontWeight: "bold", color: "black" }}
              >
                가맹점
              </InputLabel>
              <TextField
                id="mallName"
                type="text"
                label="가맹점 이름"
                size="small"
                sx={{ width: 250 }}
                error={!!errors.mallName}
                {...register("mallName", {
                  required: "가맹점 이름은 필수값 입니다.",
                })}
              />
              {errors.mallName && (
                <span className="errorMessage">{errors.mallName.message}</span>
              )}
              <br />
            </Stack>

            <Stack direction="row" alignItems="center" height="60px">
              <InputLabel
                sx={{ width: 150, fontWeight: "bold", color: "black" }}
              >
                개인/법인 구분
              </InputLabel>
              <Controller
                name="businessType"
                control={control}
                rules={{ required: "개인/법인 구분 확인은 필수값 입니다." }}
                render={({ field: { value, onChange } }) => (
                  <RadioGroup row value={value} onChange={onChange}>
                    <FormControlLabel
                      value="sole"
                      control={<Radio />}
                      label="개인"
                      sx={{ width: 100 }}
                    />
                    <FormControlLabel
                      value="corporation"
                      control={<Radio />}
                      label="법인"
                      sx={{ width: 100 }}
                    />
                  </RadioGroup>
                )}
              />

              {errors.businessType && (
                <span className="errorMessage">
                  {errors.businessType.message}
                </span>
              )}
            </Stack>

            <Stack direction="row" alignItems="center" height="60px">
              <InputLabel
                htmlFor="registrationNumber"
                sx={{ width: 150, fontWeight: "bold", color: "black" }}
              >
                사업자등록번호
              </InputLabel>

              <TextField
                placeholder="등록번호 10자리를 입력해주세요."
                label="사업자등록번호"
                size="small"
                sx={{ width: 250 }}
                {...register("registrationNumber", {
                  required: "사업자등록번호는 필수값 입니다.",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "숫자만 입력해 주세요.",
                  },
                  maxLength: {
                    value: 10,
                    message: "사업자등록번호 10자리를 입력해주세요.",
                  },
                  minLength: {
                    value: 10,
                    message: "사업자등록번호 10자리를 입력해주세요.",
                  },
                })}
              />
              {errors.registrationNumber && (
                <span className="errorMessage">
                  {errors.registrationNumber.message}
                </span>
              )}
            </Stack>

            <Stack direction="row" alignItems="center" height="60px">
              <InputLabel
                htmlFor="postCode"
                sx={{ width: 150, fontWeight: "bold", color: "black" }}
              >
                가맹점 주소
              </InputLabel>

              <Controller
                name={"postCode"}
                control={control}
                rules={{
                  required: "우편번호는 필수값 입니다.",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "숫자만 입력해 주세요.",
                  },
                }}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    size="small"
                    sx={{ width: 250 }}
                    label="우편번호"
                    value={value}
                    onChange={onChange}
                    error={!!errors.postCode}
                  />
                )}
              ></Controller>

              <Button
                sx={{
                  color: "black",
                  background: "#eee",
                  marginLeft: "15px",
                  p: "7px 20px",
                }}
                onClick={openPostCodeModal}
              >
                우편번호
              </Button>
              <br />
              {errors.postCode && (
                <span className="errorMessage">{errors.postCode.message}</span>
              )}
            </Stack>

            <Stack direction="row" alignItems="center" height="60px">
              <InputLabel sx={{ width: 150 }}></InputLabel>
              <Controller
                name={"mallAddress"}
                control={control}
                rules={{
                  required: "주소는 필수값 입니다.",
                  pattern: {},
                }}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    size="small"
                    sx={{ width: 360 }}
                    label="주소"
                    value={value}
                    onChange={onChange}
                    error={!!errors.mallAddress}
                  />
                )}
              ></Controller>

              {errors.mallAddress && (
                <span className="errorMessage">
                  {errors.mallAddress.message}
                </span>
              )}
            </Stack>

            <Stack direction="row" alignItems="center" height="60px">
              <InputLabel sx={{ width: 150 }}></InputLabel>
              <TextField
                id="detailAddress"
                sx={{ width: 360 }}
                size="small"
                label="상세주소"
                error={!!errors.detailAddress}
                {...register("detailAddress", {
                  required: "상세주소는 필수값 입니다.",
                })}
              />
              {errors.detailAddress && (
                <span className="errorMessage">
                  {errors.detailAddress.message}
                </span>
              )}
            </Stack>

            <PostCode
              openPostCode={openPostCode}
              setOpenPostCode={setOpenPostCode}
              PostCodeHandler={PostCodeHandler}
            />

            <Stack direction="row" alignItems="center" height="60px">
              <InputLabel
                htmlFor="phone"
                sx={{ width: 150, fontWeight: "bold", color: "b12lack" }}
              >
                가맹점 전화번호
              </InputLabel>
              <TextField
                id="phone"
                label="전화번호"
                size="small"
                sx={{ width: 250 }}
                error={!!errors.phone}
                {...register("phone", {
                  required: "전화번호는 필수값 입니다.",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "숫자만 입력해 주세요.",
                  },
                  maxLength: {
                    value: 12,
                    message: "전화번호는 12자리를 이하로 입력 해주세요.",
                  },
                })}
              />
              {errors.phone && (
                <span className="errorMessage">{errors.phone.message}</span>
              )}
            </Stack>

            <Stack direction="row" alignItems="center" height="60px">
              <InputLabel
                htmlFor="fax"
                sx={{ width: 150, fontWeight: "bold", color: "black" }}
              >
                가맹점 팩스번호
              </InputLabel>
              <TextField
                id="fax"
                label="팩스번호"
                size="small"
                sx={{ width: 250 }}
                error={!!errors.fax}
                {...register("fax", {
                  required: "팩스번호는 필수값 입니다.",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "숫자만 입력해 주세요.",
                  },
                  maxLength: {
                    value: 12,
                    message: "전화번호는 12자리를 이하로 입력 해주세요.",
                  },
                })}
              />
              {errors.fax && (
                <span className="errorMessage">{errors.fax.message}</span>
              )}
            </Stack>
          </Stack>

          <Stack
            direction="row"
            spacing={3}
            sx={{ mt: 3, justifyContent: "center" }}
          >
            <Button
              type="button"
              variant="contained"
              sx={{ width: 200, color: "white" }}
              onClick={snackOpenClick}
            >
              임시저장
            </Button>
            <Snackbar
              open={snackOpen}
              autoHideDuration={3000}
              onClose={snackBarClose}
              action={action}
            >
              <Alert
                onClose={snackBarClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                임시저장이 완료 되었습니다.
              </Alert>
            </Snackbar>

            <Button type="submit" variant="outlined" disabled={!isValid}>
              다음 {">"}
            </Button>
          </Stack>
        </form>
      </Paper>
      <style>{`
        * {
          font-size: 14px;
        }
        .errorMessage {
          color: #d94452;
          margin-left: 10px;
          font-size: 12px;
        }
      `}</style>
    </>
  );
};
export default Step1;
