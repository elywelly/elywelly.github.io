import { Box } from "@mui/system";
import styled from "styled-components";

export const Container = styled.div`
  margin: 80px auto;
  padding: 30px 190px;
  max-width: 500px;

  @media only screen and (max-width: 745px) {
    padding: 20px 20px;
    max-width: 300px;
  }
`;

export const StyledBox = styled(Box)`
  && {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
  }
`;

export const ImageBox = styled(Box)`
  && {
    padding: 5px 0px;
    margin: 0 auto;
  }
`;

export const Image = styled.img`
  max-width: 500px;
  border-radius: 12px;

  @media only screen and (max-width: 745px) {
    max-width: 300px;
  }
`;

export const Icon = styled.i`
  && {
    color: rgb(32, 165, 152);
    font-size: 30px;
  }
`;
