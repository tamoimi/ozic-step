import React, { useEffect } from "react"; // eslint-disable-line no-unused-vars
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Controller, useForm } from "react-hook-form";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Radio } from "@mui/material";
import { TextField } from "@mui/material";
import { Stack } from "@mui/system";
import PostCode from "../PostCode";
import { useState } from "react";
import InputMask from "react-input-mask";


const Step1 = ({ setCurrentStepProp, dataProp, setDataProp }) => {
  // 모달창, 주소api (false)
  const [openPostCode, setOpenPostCode] = useState(false);

  // React-Hook-Form
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    setValue,
    control,
    value,
    onChange,
  } = useForm({
    defaultValues: {
      mallName: "",
      businessType: "",
      registrationNumber: "",
      postCode: "",
      mallAddress: "123",
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
    // 다음단계에서 이전단계로 돌아왔을때 입력된 데이터값 남겨두기
    setDataProp((prev) => ({
      ...prev,
      mallName: data.mallName,
      businessType: data.businessType,
      registrationNumber: data.registrationNumber,
      postCode: data.postCode,
      mallAddress: data.mallAddress,
      detailAddress: data.detailAddress,
      phone: data.phone,
      fax: data.fax,
    }));
  };

  const openPostCodeModal = () => {
    setOpenPostCode(true);
  };

  // 인풋에 검색된 주소값 입력
  const PostCodeHandler = (data) => {
    setValue("postCode", data.postCode);
    setValue("mallAddress", data.mallAddress);
  };

  // setValues로 인풋에 입력된 데이터값 적용
  useEffect(() => {
    if (dataProp !== {}) {
      setValue("mallName", dataProp.mallName);
      setValue("businessType", dataProp.businessType);
      setValue("registrationNumber", dataProp.registrationNumber);
      setValue("postCode", dataProp.postCode);
      setValue("mallAddress", dataProp.mallAddress);
      setValue("detailAddress", dataProp.detailAddress);
      setValue("phone", dataProp.phone);
      setValue("fax", dataProp.fax);
    }
  }, []);

  return (
    <>
      <Paper
        sx={{
          width: "100%",
          p: 3,
          borderRadius: 4,
          marginTop: 3,
        }}
      >
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          기본 정보 입력
        </Typography>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack sx={{ marginTop: "20px" }}>
            <Stack direction="row" alignItems="center" height="60px">
              <InputLabel htmlFor="mallName" sx={{ width: 150 }}>
                가맹점
              </InputLabel>
              <TextField
                id="mallName"
                type="text"
                label="가맹점 이름"
                size="small"
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
              <InputLabel sx={{ width: 150 }}>개인/법인 구분</InputLabel>
              <RadioGroup
                row
                {...register("businessType", {
                  required: "개인/법인 구분 확인은 필수값 입니다.",
                })}
              >
                <FormControlLabel
                  value="sole"
                  control={<Radio />}
                  label="개인"
                />
                <FormControlLabel
                  value="corporation"
                  control={<Radio />}
                  label="법인"
                />
              </RadioGroup>
              {errors.businessType && (
                <span className="errorMessage">
                  {errors.businessType.message}
                </span>
              )}
            </Stack>

            <Stack direction="row" alignItems="center" height="60px">
              <InputLabel htmlFor="registrationNumber" sx={{ width: 150 }}>
                사업자등록번호
              </InputLabel>

              {/* <Controller
                name={"registrationNumber"}
                control={control}
                rules={{
                  required: "💥사업자등록번호는 필수값 입니다.",
                }}
                error={!!errors.registrationNumber}

                render={({ field: { value, onChange, onBlur } }) => (
                  <InputMask
                    
                    value={value}
                    mask="99 999 99999"
                    onChange={onChange}
                    // onBlur={(event) => {
                    //   console.log(event.target.value);
                    //   return event.target.value.replace(
                    //     /(\d{2})(\d{3})(\d{2})/,
                    //     "$1-$2-$3"
                    //   );
                    // }}

                    // InputProps={{
                    //   inputComponent: () => <InputMask mask="99 999 99999" />,
                    // }}
                    size="small"
                  >
                    <TextField
                      placeholder="12 345 67890"
                      
                      label="사업자등록번호"
                    />
                  </InputMask>
                )}
              /> */}

              {errors.registrationNumber && (
                <span className="errorMessage">
                  {errors.registrationNumber.message}
                </span>
              )}
            </Stack>

            <Stack direction="row" alignItems="center" height="60px">
              <InputLabel htmlFor="postCode" sx={{ width: 150 }}>
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
                    sx={{ width: 200 }}
                    label="우편번호"
                    error={!!errors.postCode}
                    value={value}
                    onChange={onChange}
                  />
                )}
              ></Controller>

              <Button
                sx={{ color: "black", background: "#eee", marginLeft: "20px" }}
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
              <TextField
                id="mallAddress"
                control={control}
                sx={{ width: 350 }}
                size="small"
                label="주소"
                error={!!errors.mallAddress}
                {...register("mallAddress", {
                  required: "주소는 필수값 입니다.",
                })}
              />
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
                sx={{ width: 350 }}
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
              <InputLabel htmlFor="phone" sx={{ width: 150 }}>
                가맹점 전화번호
              </InputLabel>
              <TextField
                id="phone"
                label="전화번호"
                size="small"
                error={!!errors.phone}
                {...register("phone", {
                  required: "전화번호는 필수값 입니다.",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "숫자만 입력해 주세요.",
                  },
                })}
              />
              {errors.phone && (
                <span className="errorMessage">{errors.phone.message}</span>
              )}
            </Stack>

            <Stack direction="row" alignItems="center" height="60px">
              <InputLabel htmlFor="fax" sx={{ width: 150 }}>
                가맹점 팩스번호
              </InputLabel>
              <TextField
                id="fax"
                label="팩스번호"
                size="small"
                error={!!errors.fax}
                {...register("fax", {
                  required: "팩스번호는 필수값 입니다.",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "숫자만 입력해 주세요.",
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
            sx={{ marginTop: 5, justifyContent: "center" }}
          >
            <Button
              type="button"
              variant="contained"
              sx={{ width: 200, color: "white" }}
            >
              임시저장
            </Button>

            <Button
              type="submit"
              variant="outlined"
              disabled={!isValid || !isDirty}
            >
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
