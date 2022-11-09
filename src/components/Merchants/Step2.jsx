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
      merchantCategory: "",
      businessConditions: "",
    },
  });

  const onSubmit = (data) => {
    console.log("step2 에서 다음으로 클릭 됨", "data", data);
    setCurrentStepProp((prev) => prev + 1);
  };
  const onClick = (data) => {
    console.log("step2에서 이전으로 클릭 됨");
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
  //delete list - 업종
  const deleteItem = (index) => {
    let temp = businessList.filter((item, i) => i !== index);
    setBusinessList(temp);
  };
  //validBusiness check - 업종
  const validBusiness = () => {
    return businessList.length > 0;
  };
  //keyPress - 업종
  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      addList();
    }
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
  //delete list - 업태
  const deleteStatus = (index) => {
    let temp = businessStatus.filter((item, i) => i !== index);
    setBusinesStatus(temp);
  };
  //validStatus check - 업태
  const validStatus = () => {
    return businessStatus.length > 0;
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
          세부 정보 입력
        </Typography>
        <hr />

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 세부 정보 입력폼 Stack */}
          <Stack sx={{ mt: "20px" }}>
            <Stack direction="row" alignItems="center">
              <InputLabel
                htmlFor="merchantCategory"
                sx={{ width: 150, color: "black" }}
              >
                업종
              </InputLabel>
              <Controller
                name={"merchantCategory"}
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    label="업종"
                    size="small"
                    sx={{ width: 250 }}
                    value={value}
                    onChange={onChange}
                    error={!!errors.merchantCategory}
                    onKeyPress={handleOnKeyPress}
                  />
                )}
              ></Controller>
              <Button onClick={addList}> 추가</Button>
              <br />
            </Stack>

            <Stack direction="row" alignItems="center">
              <InputLabel sx={{ width: 150 }}>{/* 업종리스트 */}</InputLabel>
              <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                {businessList.length > 0 &&
                  businessList.map((item, i) => (
                    <Chip
                      key={i}
                      label={item}
                      sx={{ mb: 2 }}
                      size="small"
                      variant="outlined"
                      onDelete={() => deleteItem(i)}
                    ></Chip>
                  ))}
              </Stack>
              <br />
            </Stack>

            <Stack direction="row" alignItems="center">
              <InputLabel
                htmlFor="businessConditions"
                sx={{ width: 150, color: "black" }}
              >
                업태
              </InputLabel>
              <Controller
                name={"businessConditions"}
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    label="업태"
                    size="small"
                    sx={{ width: 250 }}
                    value={value}
                    onChange={onChange}
                    error={!!errors.businessConditions}
                    onKeyPress={handleOnKeyPressA}
                  />
                )}
              ></Controller>
              <Button onClick={add}> 추가</Button>
              <br />
            </Stack>

            <Stack direction="row" alignItems="center">
              <InputLabel sx={{ width: 150 }}>{/* 업태리스트 */}</InputLabel>
              <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                {businessStatus.length > 0 &&
                  businessStatus.map((item, i) => (
                    <Chip
                      key={i}
                      label={item}
                      sx={{ mb: 2.5 }}
                      size="small"
                      variant="outlined"
                      onDelete={() => deleteStatus(i)}
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
              <InputLabel
                htmlFor="mailOrderSalesNumber"
                sx={{ width: 150, color: "black" }}
              >
                통신판매번호
              </InputLabel>
              <TextField
                id="mailOrderSalesNumber"
                label="통신판매번호"
                size="small"
                sx={{ width: 250 }}
                error={!!errors.mailOrderSalesNumber}
                {...register("mailOrderSalesNumber", {
                  required: "통신판매번호는 필수값 입니다.",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "숫자만 입력해 주세요.",
                  },
                })}
              />
              {errors.mailOrderSalesNumber && (
                <span className="errorMessage">
                  {errors.mailOrderSalesNumber.message}
                </span>
              )}
            </Stack>

            <Stack direction="row" alignItems="center" height="60px">
              <InputLabel htmlFor="mallUrl" sx={{ width: 150, color: "black" }}>
                가맹점 URL
              </InputLabel>
              <TextField
                id="mallUrl"
                label="가맹점 URL"
                size="small"
                sx={{ width: 250 }}
                error={!!errors.mallUrl}
                {...register("mallUrl", {
                  required: "가맹점 URL 필수값 입니다.",
                })}
              />
            </Stack>

            <Stack direction="row" alignItems="center" height="60px">
              <InputLabel htmlFor="mallIp" sx={{ width: 150, color: "black" }}>
                가맹점 IP
              </InputLabel>
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
                테스트용 ID
                <Typography sx={{ fontSize: "12px", color: "gray" }}>
                  (카드사 심사용)
                </Typography>
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
              {errors.testId && (
                <span className="errorMessage">{errors.testId.message}</span>
              )}
            </Stack>
            <Stack direction="row" alignItems="center" height="60px">
              <InputLabel
                htmlFor="testPassword"
                sx={{ width: 150, color: "black" }}
              >
                테스트용 비밀번호
                <Typography sx={{ fontSize: "12px", color: "gray" }}>
                  (카드사 심사용)
                </Typography>
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
              disabled={!isValid || !validBusiness() || !validStatus()}
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
export default Step2;
