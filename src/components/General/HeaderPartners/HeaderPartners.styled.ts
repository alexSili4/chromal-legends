import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 393px;
  }
`;

export const MasterCardImg = styled.img`
  width: 52px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 63px;
  }
`;

export const SilpoImg = styled.img`
  width: 86px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 106px;
  }
`;

export const ChromaLegendsImg = styled.img`
  width: 96px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 118px;
  }
`;

export const Delimiter = styled.div`
  width: 1px;
  height: 39px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  opacity: 0.5;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 2px;
    height: 47px;
  }
`;
