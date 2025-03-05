import React from "react";
import { HintTextContainer } from "./Input.styles";
import styled from "styled-components";
import { ReactComponent as InfoIcon } from "../../assets/images/icon-info.svg";

const StyledInfoIcon = styled(InfoIcon)`
  width: 16px;
  height: 16px;
  & path {
    stroke: currentColor;
  }
`;

function HintText({ text, ...props }) {
  return (
    <HintTextContainer {...props}>
      <StyledInfoIcon />
      {text}
    </HintTextContainer>
  );
}

export default HintText;
