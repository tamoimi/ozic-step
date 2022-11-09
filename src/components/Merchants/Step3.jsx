import React, { useState } from "react"; // eslint-disable-line no-unused-vars
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Controller, useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment/InputAdornment";
import ErrorOutline from "@mui/icons-material/ErrorOutline";
import Tooltip from "@mui/material/Tooltip";
import Chip from "@mui/material/Chip";

const Step3 = ({ setCurrentStepProp }) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      merchantCategory: "",
      businessConditions: "",
    },
  });

  const onSubmit = (data) => {
    console.log("step3 에서 다음으로 클릭 됨", "data", data);
    setCurrentStepProp((prev) => prev + 1);
  };
  const onClick = (data) => {
    console.log("step3 에서 이전으로 클릭 됨");
    setCurrentStepProp((prev) => prev - 1);
  };

  //dynamic list - 업종
  const [businessList, setBusinessList] = useState([]);
  const [businessStatus, setBusinesStatus] = useState([]);

  //add list - 업종
  const addList = () => {
    if (businessList.length > 4) {
      alert("5개면 충분");
      setValue("merchantCategory", "");
      return;
    }

    const businessValue = getValues("merchantCategory");
    if (businessValue.trim() === "") return;
    setBusinessList((prev) => [...prev, businessValue]);
    setValue("merchantCategory", "");
  };

  //add list - 업태
  const add = () => {
    if (businessStatus.length > 4) {
      alert("5개면 충분");
      setValue("businessConditions", "");
      return;
    }

    const businessStatusValue = getValues("businessConditions");
    if (businessStatusValue.trim() === "") return;
    setBusinesStatus((prev) => [...prev, businessStatusValue]);
    setValue("businessConditions", "");
  };

  //delete list
  const deleteItem = (index) => {
    let temp = businessList.filter((item, i) => i !== index);
    setBusinessList(temp);
  };
  //validBusiness check
  const validBusiness = () => {
    return businessList.length > 0;
  };

  //keyPress - 업종
  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      addList();
    }
  };
  //keyPress - 업태
  const handleOnKeyPressA = (e) => {
    if (e.key === "Enter") {
      add();
    }
  };

  return (
    <>
      <Paper
        sx={{
          width: "100%",
          height: 650,
          p: 3,
          borderRadius: 4,
          mt: 3,
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: "16px", mb: 3 }}>
          은행 정보 입력
        </Typography>
        <hr />

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 세부 정보 입력폼 Stack */}
          <Stack sx={{ mt: "20px" }}>
            <Stack direction="row" alignItems="center" height="60px">
              <InputLabel htmlFor="mallIp" sx={{ width: 150, color: "black" }}>
                은행명
              </InputLabel>
              {/* SELECT BOX */}
              <TextField
                id="mallIp"
                label="가맹점 IP"
                size="small"
                sx={{ width: 250 }}
                error={!!errors.mallIp}
                helperText={errors.mallIp ? errors.mallIp.message : ""}
                {...register("mallIp", {
                  required: "가맹점 IP 는 필수값 입니다.",
                })}
              />
              {errors.mallIp && (
                <span className="errorMessage">{errors.mallIp.message}</span>
              )}
            </Stack>
            <Stack direction="row" alignItems="center" height="60px">
              <InputLabel htmlFor="testId" sx={{ width: 150, color: "black" }}>
                은행 계좌번호
              </InputLabel>
              <TextField
                id="testId"
                label="테스트용 ID"
                size="small"
                sx={{ width: 250 }}
                error={!!errors.testId}
                {...register("testId", {
                  required: "테스트용 ID 는 필수값 입니다.",
                })}
              />
              {errors.testId && (
                <span className="errorMessage">{errors.testId.message}</span>
              )}
            </Stack>
            <Stack direction="row" alignItems="center" height="60px">
              <InputLabel
                htmlFor="testPassword"
                sx={{ width: 150, color: "black" }}
              >
                계좌 소유주 
              </InputLabel>
              <TextField
                id="testPassword"
                label="가맹점 비밀번호"
                size="small"
                sx={{ width: 250 }}
                error={!!errors.testPassword}
                {...register("testPassword", {
                  required: "가맹점 IP 는 필수값 입니다.",
                })}
              />
              {errors.testPassword && (
                <span className="errorMessage">
                  {errors.testPassword.message}
                </span>
              )}
            </Stack>
          </Stack>

          {/* 버튼 Stack */}
          <Stack
            direction="row"
            spacing={3}
            sx={{ justifyContent: "center", mt: 3 }}
          >
            <Button type="submit" variant="outlined" onClick={onClick} disabled>
              {"<"}이전
            </Button>
            <Button
              type="button"
              variant="contained"
              sx={{ width: 200, color: "white" }}
              onClick={onClick}
              disabled
            >
              임시저장
            </Button>

            <Button
              type="submit"
              variant="outlined"
              disabled={!isValid || !validBusiness()}
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
        .css-1f1m77v-MuiInputBase-root-MuiOutlinedInput-root {
          padding-right: 0;
        }
        .MuiStack-root css-ymblet-MuiStack-root {
          height: 0;
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
export default Step3;
