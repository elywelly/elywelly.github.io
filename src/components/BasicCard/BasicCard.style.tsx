import { Typography } from "@mui/material";
import styled from "styled-components";

export const BodyFont = styled(Typography)`
  && {
    color: #626a68;
    font-size: 16px;
    font-family: Raleway, sans-serif;

    @media only screen and (max-width: 450px) {
      font-size: 14px;
    }
  }
`;
