import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.h1};

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 1.75rem;
  }
`;

export const H2 = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.h2};
`;

export const H3 = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.h3};
`;

export const H4 = styled.h4`
  font-size: 0.875rem;
  line-height: normal;
  color: ${({ theme }) => theme.colors.h4};
`;

export const Text = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: ${({ lineHeight }) => lineHeight || "normal"};
`;
