import styled from "styled-components";

const StyledButton = styled.button`
  padding: 12px 16px;
  height: 41px;
  flex-shrink: 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.2px;
  color: ${({ $variant, theme }) =>
    theme.colors.buttons[$variant].default.text};
  background-color: ${({ $variant, theme }) =>
    theme.colors.buttons[$variant].default.background};
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  border-color: ${({ $variant, theme }) =>
    theme.colors.buttons[$variant].default.border};
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover:not(:disabled) {
    ${({ $variant, theme }) => ({
      color: theme.colors.buttons[$variant].hover.text,
      borderColor: theme.colors.buttons[$variant].hover.border,
      backgroundColor: theme.colors.buttons[$variant].hover.background,
    })}
  }

  &:focus:not(:disabled) {
    ${({ $variant, theme }) => ({
      color: theme.colors.buttons[$variant].focus.text,
      borderColor: theme.colors.buttons[$variant].focus.border,
      backgroundColor: theme.colors.buttons[$variant].focus.background,
      boxShadow: theme.colors.buttons[$variant].focus.boxShadow,
    })}
  }

  &:disabled {
    ${({ $variant, theme }) => ({
      color: theme.colors.buttons[$variant].disabled.text,
      borderColor: theme.colors.buttons[$variant].disabled.border,
      backgroundColor: theme.colors.buttons[$variant].disabled.background,
    })}
    cursor: not-allowed;
  }
`;

const ButtonContainer = styled(StyledButton)`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;

  & svg {
    width: 20px;
    height: 20px;
  }
`;

const Button = ({ icon: Icon, children, variant = "primary", ...props }) => {
  return (
    <ButtonContainer {...props} $variant={variant}>
      {Icon && <Icon />}
      {children}
    </ButtonContainer>
  );
};

export default Button;
