import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import {
  Logo,
  RoundImage,
  StyledAppBar,
  StyledButton,
  StyledFont,
} from "./AppBar.style";
import BasicInfo from "../BasicInfo.tsx/BasicInfo";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { BoldHeading } from "../BasicInfo.tsx/BasicInfo.style";
import { Link } from "@mui/material";
import { Mail } from "lucide-react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
};

const logo = "./kiki-logo.jpeg";
const me = "./me.jpg";

export default function AppBar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <StyledAppBar>
        <Toolbar>
          <Logo src={require(`${logo}`)} alt="kiki" />{" "}
          <StyledFont>Kiki x Ely</StyledFont>
          <Box sx={{ marginLeft: "auto" }}>
            <StyledButton onClick={handleOpen}>Do you love me?</StyledButton>
          </Box>
        </Toolbar>
      </StyledAppBar>
      <BasicInfo />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <BoldHeading variant="h5" sx={{ textAlign: "center" }}>
            Pretty sure it's a match
          </BoldHeading>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "30px",
            }}
          >
            <RoundImage src={require(`${me}`)} alt="Image 4" />
            <Logo src={require(`${logo}`)} alt="kiki" />
            <RoundImage src={require(`${logo}`)} alt="Image 4" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <Link href="mailto:elynn@duck.com" color="inherit">
              {" "}
              <Mail />
            </Link>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
