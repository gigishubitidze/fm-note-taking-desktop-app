import styled from "styled-components";

const Divider = styled.hr`
  min-height: 1px;
  margin: ${({ $margin }) => $margin || "16px 0"};
  border: none;
  background-color: ${({ theme }) => theme.colors.hr};
`;

export default Divider;
