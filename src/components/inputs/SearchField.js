import React from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/images/icon-search.svg";

const InputWrapper = styled.div`
  width: ${({ $width }) => $width || "100%"};
  position: relative;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 16px 12px 44px;
  border-radius: 8px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.input.border};
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
`;

const IconContainer = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);

  & svg path {
    fill: ${({ theme }) => theme.colors.input.icon};
  }
`;

function SearchField({ width, ...props }) {
  return (
    <InputWrapper $width={width}>
      <StyledInput {...props} />
      <IconContainer>
        <SearchIcon />
      </IconContainer>
    </InputWrapper>
  );
}

export default SearchField;
