import React from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

const PostCode = ({ openPostCode, setOpenPostCode, PostCodeHandler }) => {
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
      PostCodeHandler(data);
      setOpenPostCode(false);
    },
  };

  //modal style
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Modal open={openPostCode} onClose={handleClose}>
        <Box sx={style}>
          <Box sx={{ textAlign: "right", marginBottom: 2 }}>
            <Button onClick={handleClose}>
              <CloseIcon />
            </Button>
          </Box>
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
