import React from "react";
import styled, { css } from "styled-components";

const fontTokens = css`
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: -0.2px;
`;

const InputContainer = styled.label`
  ${fontTokens}
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.input.labelLight};
`;

const IconContainer = styled.div`
  svg {
    width: 16px;
    height: 16px;
  }
`;

const StyledLabel = styled.div`
  flex: 0 0 115px;
  padding: 4px 0;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const StyledTextInput = styled.input`
  ${fontTokens}
  flex: 1;
  color: ${({ theme }) => theme.colors.input.text};
  border: none;
  border-radius: 4px;
  outline: none;
  background-color: ${({ theme }) => theme.colors.input.background};

  &::placeholder {
    color: ${({ theme }) => theme.colors.input.placeholderLight};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.input.shadowInner},
      0 0 0 3px ${({ theme }) => theme.colors.input.shadowOuter};
  }
`;

export const TitleInput = styled.input.attrs({ type: "text" })`
  font-family: inherit;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.5px;
  color: ${({ theme }) => theme.colors.input.text};
  background-color: ${({ theme }) => theme.colors.input.background};
  border: none;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.input.text};
  }
`;

function TextInput({ icon: Icon, label, ...props }) {
  return (
    <InputContainer>
      <StyledLabel>
        {Icon && (
          <IconContainer>
            <Icon />
          </IconContainer>
        )}
        {label}
      </StyledLabel>
      <StyledTextInput {...props} />
    </InputContainer>
  );
}

export default TextInput;
