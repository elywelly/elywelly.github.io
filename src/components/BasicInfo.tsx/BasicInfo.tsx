import { Box } from "@mui/material";
import { StyledFont } from "../AppBar/AppBar.style";
import { Container, Image, ImageBox, StyledBox } from "./BasicInfo.style";
import BasicCard from "../BasicCard/BasicCard";

const basicInfoImage = "./basic-image.JPG";
const projectImage = "./project.jpg";
const dayreImage = "./dayre.png";
const meImage = "./me.jpg";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicInfo() {
  return (
    <Container>
      <StyledBox>
        <StyledFont>Elynn wants a spot on the Kiki team</StyledFont>
        <ImageBox>
          <Image src={require(`${basicInfoImage}`)} alt="Image 1" />
        </ImageBox>
        <StyledFont>Heyy, I'm E{bull}lynn</StyledFont>
        <BasicCard section={"basic"} />
        <ImageBox>
          <Image src={require(`${projectImage}`)} alt="Image 2" />
        </ImageBox>
        <BasicCard section={"projects"} />
        <ImageBox>
          <Image src={require(`${dayreImage}`)} alt="Image 3" />
        </ImageBox>
        <BasicCard section={"experiences"} />
        <ImageBox>
          <Image src={require(`${meImage}`)} alt="Image 4" />
        </ImageBox>
        <BasicCard section={"me"} />
      </StyledBox>
    </Container>
  );
}
