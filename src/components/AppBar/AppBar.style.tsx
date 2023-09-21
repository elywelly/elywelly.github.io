import { AppBar, Button, Typography } from "@mui/material";
import styled from "styled-components";

export const Logo = styled.img`
  max-height: 45px;
`;

export const StyledAppBar = styled(AppBar)`
  && {
    background-color: #ffffff;
  }
`;

export const StyledFont = styled(Typography)`
  && {
    color: rgba(0, 0, 0, 0.87);
    font-size: 24px;
    font-family: Raleway, sans-serif;
    font-weight: bold;

    @media only screen and (max-width: 450px) {
      font-size: 16px;
    }
  }
`;

export const StyledButton = styled(Button)`
  && {
    background: linear-gradient(-22.5deg, #20a598 0%, #6bddca 100%);
    color: white;
    font-weight: bold;

    @media only screen and (max-width: 380px) {
      max-width: 120px;
      font-size: 10px;
    }
  }

  &:hover {
    background: linear-gradient(-22.5deg, #188c81 0%, #65cebd 100%);
  }
`;
