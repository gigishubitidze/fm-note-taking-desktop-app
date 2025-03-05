import React from "react";
import { StyledLabel } from "./Input.styles";

function Label({ label, ...props }) {
  return <StyledLabel {...props}>{label}</StyledLabel>;
}

export default Label;
