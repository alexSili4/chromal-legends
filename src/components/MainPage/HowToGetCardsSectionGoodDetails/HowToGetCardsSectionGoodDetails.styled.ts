import styled from '@emotion/styled';

export const Link = styled.a`
  display: flex;
`;

export const Container = styled.span`
  display: flex;
  flex-direction: column;
  width: 186px;
  height: 215px;
  border: 7px solid #052d44;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 272px;
    height: 314px;
  }
`;

export const ImgWrap = styled.span`
  display: flex;
  overflow: hidden;
`;

export const Image = styled.img`
  margin-left: auto;
  margin-right: auto;
  object-fit: contain;
`;

export const TextWrap = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)}px;
  padding: ${({ theme }) => theme.spacing(3)}px;
`;

export const Price = styled.span`
  color: #052d44;
  font-family: ${({ theme }) => theme.fontFamily.proximaNova};
  font-size: 22px;
  font-weight: 700;
  line-height: 1;
`;

export const Name = styled.span`
  color: #052d44;
  font-family: ${({ theme }) => theme.fontFamily.proximaNova};
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
`;
