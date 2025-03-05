import styled from "styled-components";

export const InputContainer = styled.div`
  width: ${({$width}) => $width || "100%"};
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const StyledLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: "-0.2px";
  color: ${({ theme }) => theme.colors.input.label};
`;

export const HintTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: 0;
  color: ${({ $isError, theme }) =>
    $isError ? theme.colors.input.error : theme.colors.input.hintText};
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: ${({ $padding }) => $padding || "12px 16px"};
  border-radius: 8px;
  outline: none;
  border: 1px solid
    ${({ $isError, theme }) =>
      $isError ? theme.colors.input.error : theme.colors.input.border};
  background: ${({ theme }) => theme.colors.input.background};

  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: "-0,2px";
  color: ${({ theme }) => theme.colors.input.text};

  &::placeholder {
    color: ${({ theme }) => theme.colors.input.placeholder};
  }

  &:focus {
    border-color: ${({ $isError, theme }) =>
      $isError ? theme.colors.input.error : theme.colors.input.borderFocused};
    box-shadow: ${({ $isError, theme }) =>
      $isError
        ? `0 0 0 2px ${theme.colors.input.shadowInner}, 0 0 0 4px ${theme.colors.input.error}`
        : `0 0 0 2px ${theme.colors.input.shadowInner}, 0 0 0 4px ${theme.colors.input.shadowOuter}`};
  }

  &:hover:not(:focus) {
    background-color: ${({ theme }) => theme.colors.input.backgroundHover};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.input.backgroundDisabled};
    cursor: not-allowed;
  }

  &:disabled::placeholder {
    color: ${({ theme }) => theme.colors.input.placeholderDisabled};
  }
`;
