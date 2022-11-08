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
import { Alert } from "@mui/material";

const Step2 = ({ setCurrentStepProp }) => {
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
      business: "",
    },
  });

  const onSubmit = (data) => {
    console.log("step2 에서 다음으로 클릭 됨");
    setCurrentStepProp((prev) => prev + 1);
  };
  const onClick = (data) => {
    console.log("step2에서 이전으로 클릭 됨");
    setCurrentStepProp((prev) => prev - 1);
  };

  //dynamic list - 업종
  const [businessList, setBusinessList] = useState([]);

  //add list
  const addList = () => {
    if (businessList.length > 4) {
      alert("5개면 충분");
      setValue("business", "");
      return;
    }

    const businessValue = getValues("business");
    if (businessValue.trim() === "") return;
    setBusinessList((prev) => [...prev, businessValue]);
    setValue("business", "");
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

  //keyPress
  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      addList();
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
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          세부 정보 입력
        </Typography>
        <hr />

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 세부 정보 입력폼 Stack */}
          <Stack sx={{ mt: "20px" }}>
            <Stack direction="row" alignItems="center">
              <InputLabel
                htmlFor="business"
                sx={{ width: 150, fontWeight: "bold", color: "black" }}
              >
                업종
              </InputLabel>
              <Controller
                name={"business"}
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    label="업종"
                    size="small"
                    value={value}
                    onChange={onChange}
                    error={!!errors.business}
                    onKeyPress={handleOnKeyPress}
                  />
                )}
              ></Controller>
              <Button onClick={addList}> 추가</Button>
              <br />
            </Stack>

            <Stack direction="row" alignItems="center">
              <InputLabel htmlFor="business" sx={{ width: 150 }}>
                {/* 업종리스트 */}
              </InputLabel>
              <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                {businessList.length > 0 &&
                  businessList.map((item, i) => (
                    <Chip
                      key={i}
                      label={item}
                      sx={{ mb: 1, mb: 2 }}
                      size="small"
                      variant="outlined"
                      onDelete={() => deleteItem(i)}
                    ></Chip>
                  ))}
              </Stack>
              <br />
            </Stack>

            <Stack direction="row" alignItems="center">
              <InputLabel htmlFor="business" sx={{ width: 150 }}>
                업태
              </InputLabel>
              <Controller
                name={"business"}
                // businessStatus
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    label="업태"
                    size="small"
                    value={value}
                    onChange={onChange}
                    error={!!errors.business}
                    onKeyPress={handleOnKeyPress}
                  />
                )}
              ></Controller>
              <Button onClick={addList}> 추가</Button>
              <br />
            </Stack>

            <Stack direction="row" alignItems="center">
              <InputLabel htmlFor="business" sx={{ width: 150 }}>
                {/* 업태리스트 */}
              </InputLabel>
              <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                {businessList.length > 0 &&
                  businessList.map((item, i) => (
                    <Chip
                      key={i}
                      label={item}
                      sx={{ mb: 1, mb: 2.5 }}
                      size="small"
                      variant="outlined"
                      onDelete={() => deleteItem(i)}
                    ></Chip>
                  ))}
              </Stack>
              <br />
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              height="40px"
              sx={{ mb: 1.5 }}
            >
              <InputLabel htmlFor="businessNum" sx={{ width: 150 }}>
                통신판매번호
              </InputLabel>
              <TextField
                id="businessNum"
                label="통신판매번호"
                size="small"
                error={!!errors.businessNum}
                helperText={
                  errors.businessNum ? errors.businessNum.message : ""
                }
                {...register("businessNum", {
                  required: "통신판매번호는 필수값 입니다.",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "숫자만 입력해 주세요.",
                  },
                })}
              />
            </Stack>

            <Stack direction="row" alignItems="center" height="60px">
              <InputLabel htmlFor="franchiseeUrl" sx={{ width: 150 }}>
                가맹점 URL
              </InputLabel>
              <TextField
                id="franchiseeUrl"
                label="가맹점 URL"
                size="small"
                error={!!errors.franchiseeUrl}
                helperText={
                  errors.franchiseeUrl ? errors.franchiseeUrl.message : ""
                }
                {...register("franchiseeUrl", {
                  required: "가맹점 URL 필수값 입니다.",
                  pattern: {
                    // 주소 패턴 찾아보기
                  },
                })}
              />
            </Stack>

            <Stack direction="row" alignItems="center" height="60px">
              <InputLabel htmlFor="franchiseeIp" sx={{ width: 150 }}>
                가맹점 IP
              </InputLabel>
              <TextField
                id="franchiseeIp"
                label="가맹점 IP"
                size="small"
                error={!!errors.franchiseeIp}
                helperText={
                  errors.franchiseeIp ? errors.franchiseeIp.message : ""
                }
                {...register("franchiseeIp", {
                  required: "가맹점 IP 는 필수값 입니다.",
                  pattern: {
                    // 숫자 + . 만 가능한 패턴 찾아보기
                  },
                })}
              />
            </Stack>
            <Stack direction="row" alignItems="center" height="60px">
              <InputLabel htmlFor="testId" sx={{ width: 150 }}>
                테스트용 ID <br /> (카드사 심사용)
              </InputLabel>
              <TextField
                id="testId"
                label="테스트용 ID"
                size="small"
                error={!!errors.testId}
                helperText={errors.testId ? errors.testId.message : ""}
                {...register("testId", {
                  required: "테스트용 ID 는 필수값 입니다.",
                  pattern: {
                    // 영 + 숫자만 NO 특수문자
                  },
                })}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Tooltip
                        title={
                          <Typography variant="subtitle2" fontSize={11}>
                            ID는 가맹점 사이트 테스트용 ID 입니다.
                          </Typography>
                        }
                        placement="right"
                        arrow
                      >
                        <IconButton>
                          <ErrorOutline />
                        </IconButton>
                      </Tooltip>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
            <Stack direction="row" alignItems="center" height="60px">
              <InputLabel htmlFor="testPw" sx={{ width: 150 }}>
                테스트용 비밀번호 <br /> (카드사 심사용)
              </InputLabel>
              <TextField
                id="testPw"
                label="가맹점 비밀번호"
                size="small"
                error={!!errors.testPw}
                helperText={errors.testPw ? errors.testPw.message : ""}
                {...register("testPw", {
                  required: "가맹점 IP 는 필수값 입니다.",
                  pattern: {
                    // 영 + 숫자 + 특수문자 min, max 설정
                  },
                })}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Tooltip
                        title={
                          <Typography variant="subtitle2" fontSize={11}>
                            비밀번호는 보안을 위해 임시저장이 되지 않습니다.
                          </Typography>
                        }
                        placement="right"
                        arrow
                      >
                        <IconButton>
                          <ErrorOutline />
                        </IconButton>
                      </Tooltip>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
          </Stack>

          {/* 버튼 Stack */}
          <Stack
            direction="row"
            spacing={3}
            sx={{ justifyContent: "center", mt: 5 }}
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
              onClick={onSubmit}
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
      `}</style>
    </>
  );
};
export default Step2;
