import React from "react";
import  Paper  from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography  from "@mui/material/Typography";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import MenuIcon from "@mui/icons-material/Menu";

// const navigate = useNavigate();
// const onClickList = () => {
//   navigate(`/FranchiseesList`);
// };

export const Navigation = () => {
  return (
    <>
      <Paper
        sx={{
          width: 240,
          height: 889,
          borderRadius: 4,
          p: 3,
          mr: 3
        }}
      >
        <Stack direction="row" alignItems="center">
          <MenuIcon />
          <img
            src="img/ozicpay_logo_text.png"
            alt="ozic_pay_logo"
            style={{ width: 60, display: "inline-block", mb: 3 }}
          />
        </Stack>
        <hr />
        <Stack direction="row">
          <CreditCardIcon />
          <Typography>가맹점 등록</Typography>
        </Stack>
      </Paper>
      <style>{`
      hr {
        height: 1px;
        background: #ccc;
        border: none;
      }
      `}</style>
    </>
  );
};
