import styled from '@emotion/styled';

export const Link = styled.a`
  align-self: flex-start;
`;

export const Container = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)}px;
  padding: ${({ theme }) => theme.spacing(3)}px;
  border-radius: 10px;
  background-color: #003c5e;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    padding-right: ${({ theme }) => theme.spacing(5)}px;
  }
`;

export const GameImg = styled.img`
  width: 50px;
  height: 50px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 60px;
    height: 60px;
  }
`;

export const Content = styled.span`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)}px;
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.proximaNova};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 20px;
  }
`;

export const Accent = styled.strong`
  font-weight: 700;
`;

export const QRCode = styled.img`
  width: 60px;
  height: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: none;
  }
`;
