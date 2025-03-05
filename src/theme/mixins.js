// mixins.js
import { css } from "styled-components";

export const focusInputStyles = css`
  border-color: ${({ $isError, theme }) =>
    $isError
      ? theme.colors.input.borderError
      : theme.colors.input.borderFocused};
  box-shadow: ${({ $isError, theme }) =>
    $isError
      ? `0 0 0 2px ${theme.colors.shadowInner}, 0 0 0 4px ${theme.colors.shadowError}`
      : `0 0 0 2px ${theme.colors.shadowInner}, 0 0 0 4px ${theme.colors.shadowOuter}`};
`;
