import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Logo, StyledAppBar, StyledButton, StyledFont } from "./AppBar.style";
import BasicInfo from "../BasicInfo.tsx/BasicInfo";

const logo = "./kiki-logo.jpeg";

export default function AppBar() {
  return (
    <>
      <StyledAppBar>
        <Toolbar>
          <Logo src={require(`${logo}`)} alt="kiki" />{" "}
          <StyledFont>Kiki x Ely</StyledFont>
          <Box sx={{ marginLeft: "auto" }}>
            <StyledButton>Do you love me?</StyledButton>
          </Box>
        </Toolbar>
      </StyledAppBar>
      <BasicInfo />
    </>
  );
}
