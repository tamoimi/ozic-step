import React from "react"; 
import { Paper } from "@mui/material";

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
          textAlign: "center",
          borderRadius: 4,
          p: 3,
        }}
      >
        <img src="img/ozicpay_logo_text.png" alt="ozic_pay_logo" style={{ width: 80 }} />
        <h2>가맹점 등록</h2>
      
      </Paper>
    </>
  );
};
