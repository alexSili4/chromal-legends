import styled from '@emotion/styled';

export const Link = styled.a``;

export const Container = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)}px;
  padding: ${({ theme }) => theme.spacing(3)}px;
  border-radius: 10px;
  background-color: #003c5e;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.proximaNova};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
`;

export const Accent = styled.strong`
  font-weight: 700;
`;
