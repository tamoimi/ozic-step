import React from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";

const PostCode = ({ openPostCode, setOpenPostCode }) => {
  //useState
  const handleClose = () => setOpenPostCode(false);

  //handler
  const handle = {
    //주소 선택 이벤트
    selectAddress: (data) => {
      console.log(`
        주소: ${data.address},
        우편번호: ${data.zonecode}    
        `);
      setOpenPostCode(false);
    },
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Modal open={openPostCode} onClose={handleClose}>
        <Box sx={style}>
          <DaumPostcodeEmbed
            onComplete={handle.selectAddress}
            autoClose={false}
          />
        </Box>
      </Modal>
    </>
  );
};

export default PostCode;
