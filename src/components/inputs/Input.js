import React from "react";
import { InputContainer, StyledInput } from "./Input.styles";
import Label from "./Label";
import HintText from "./HintText";

function Input({ label, hintText, isError, ...props }) {
  return (
    <InputContainer>
      {label && <Label label={label} />}
      <StyledInput {...props} $isError={isError}/>
      {hintText && <HintText text={hintText} $isError={isError}/>}
    </InputContainer>
  );
}

export default Input;
