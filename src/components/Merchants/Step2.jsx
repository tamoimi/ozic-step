import React from "react"; // eslint-disable-line no-unused-vars
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { Stack } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment/InputAdornment";
import { ErrorOutline } from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";

const Step2 = ({ setCurrentStepProp }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm();
  const onSubmit = (data) => {
    console.log("step2 에서 다음으로 클릭 됨");
    setCurrentStepProp((prev) => prev + 1);
  };
  const onClick = (data) => {
    console.log("step2에서 이전으로 클릭 됨");
    setCurrentStepProp((prev) => prev - 1);
  };

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
          세부 정보 입력
        </Typography>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack sx={{ marginTop: "20px" }}>
            <Stack direction="row" alignItems="center" height="60px">
              <InputLabel htmlFor="business" sx={{ width: 150 }}>
                업종
              </InputLabel>
              <TextField
                id="business"
                label="업종"
                size="small"
                error={!!errors.business}
                helperText={errors.business ? errors.business.message : ""}
                {...register("business", {
                  required: "업종은 필수값 입니다.",
                })}
              />
              <br />
            </Stack>
            <Stack direction="row" alignItems="center" height="60px">
              <InputLabel htmlFor="businessStatus" sx={{ width: 150 }}>
                업태
              </InputLabel>
              <TextField
                id="businessStatus"
                label="업태"
                size="small"
                error={!!errors.businessStatus}
                helperText={
                  errors.businessStatus ? errors.businessStatus.message : ""
                }
                {...register("businessStatus", {
                  required: "업태는 필수값 입니다.",
                })}
              />
              <br />
            </Stack>

            <Stack direction="row" alignItems="center" height="60px">
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
                            비밀번호는 가맹점 사이트 테스트용 비밀번호 입니다.
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

          <Stack
            direction="row"
            spacing={3}
            sx={{ marginTop: 5, justifyContent: "center" }}
          >
            <Button type="submit" variant="outlined" onClick={onClick}>
              {"<"}이전
            </Button>
            <Button
              type="button"
              variant="contained"
              sx={{ width: 200, color: "white" }}
              onClick={onClick}
            >
              임시저장
            </Button>

            <Button
              type="submit"
              variant="outlined"
              disabled={!isDirty}
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
      `}</style>
    </>
  );
};
export default Step2;
