import React, { useState } from "react";
import styled from "styled-components";
import { InputContainer, StyledInput } from "./Input.styles";
import Label from "./Label";
import HintText from "./HintText";
import { ReactComponent as ShowPassIcon } from "../../assets/images/icon-show-password.svg";
import { ReactComponent as HidePassIcon } from "../../assets/images/icon-hide-password.svg";

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const IconContainer = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  cursor: pointer;
`;

const StyledShowPassIcon = styled(ShowPassIcon)`
  & path {
    fill: ${({ theme }) => theme.colors.input.icon};
  }
`;

const StyledHidePassIcon = styled(HidePassIcon)`
  & path {
    stroke: ${({ theme }) => theme.colors.input.icon};
  }
`;

function PasswordInput({ label, hintText, isError, ...props }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <InputContainer>
      {label && <Label label={label} />}
      <InputWrapper>
        <StyledInput
          {...props}
          type={showPassword ? "text" : "password"}
          $padding="12px 44px 12px 16px"
          $isError={isError}
        />
        <IconContainer onClick={togglePasswordVisibility}>
          {showPassword ? <StyledHidePassIcon /> : <StyledShowPassIcon />}
        </IconContainer>
      </InputWrapper>

      {hintText && <HintText text={hintText} $isError={isError} />}
    </InputContainer>
  );
}

export default PasswordInput;
