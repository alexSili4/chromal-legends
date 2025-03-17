import styled from '@emotion/styled';

export const Link = styled.a`
  align-self: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    pointer-events: none;
  }
`;

export const Container = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(3)}px;
  border-radius: 10px;
  background-color: #003c5e;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(3)}px;
  }
`;

export const GameImg = styled.img`
  width: 74px;
  height: 74px;
  border: 1.25px solid ${({ theme }) => theme.colors.black};
  border-radius: 10px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 117px;
    height: 115px;
  }
`;

export const Content = styled.span`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)}px;
`;

export const QrCodeImg = styled.img`
  width: 70px;
  height: 72px;
  border-radius: 5px;
  border: 0.63px solid ${({ theme }) => theme.colors.black};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 112px;
    height: 115px;
    border-radius: 8px;
  }
`;
