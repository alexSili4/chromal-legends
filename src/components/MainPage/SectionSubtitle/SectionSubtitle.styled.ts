import styled from '@emotion/styled';

export const Subtitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.proximaNova};
  font-size: 16px;
  font-weight: 800;
  line-height: 1;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 24px;
  }
`;
