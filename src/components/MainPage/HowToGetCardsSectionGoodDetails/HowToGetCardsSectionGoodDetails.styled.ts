import styled from '@emotion/styled';

export const Container = styled.div`
  height: 215px;
  border: 7px solid #052d44;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.white};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    height: 314px;
  }
`;
