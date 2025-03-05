import { createGlobalStyle } from "styled-components";
import InterVariableFont from "../assets/fonts/inter/Inter-VariableFont_opsz,wght.ttf";
import "simplebar-react/dist/simplebar.min.css";

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    min-width: 0;
    min-height: 0;
    box-sizing: border-box;
  }

  svg {
    display: block;
  }

  @font-face {
    font-family: Inter;
    src: url(${InterVariableFont}) format('truetype');
    font-weight: 100 900;
    display: swap;
  }

  body {
    ${({ theme }) => ({
      fontFamily: theme.typography.fontFamily,
      ...theme.typography.body,
      backgroundColor: theme.colors.body,
      color: theme.colors.text,
    })}
  }

  .ql-toolbar {
    font-family: 'Inter', sans-serif !important;
    font-size: 14px;
  }

  .ql-editor {
    font-family: 'Inter', sans-serif !important;
    font-size: 14px;
  }

`;

export default GlobalStyles;
