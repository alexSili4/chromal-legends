import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(3)}px;
  }
`;

export const ListItem = styled.li``;

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing()}px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1.25px solid ${({ theme }) => theme.colors.black};
  border-radius: 10.04px;
  padding: 6px 10px 2px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding: 9px 15px 5px;
  }
`;

export const Image = styled.img`
  width: 22px;
  height: 22px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 34px;
    height: 34px;
  }
`;

export const TextWrap = styled.div`
  position: relative;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.raleway};
  font-size: 8.78px;
  font-weight: 400;
  line-height: 0.95;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 14px;
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.raleway};
  font-size: 15.06px;
  font-weight: 700;
  line-height: 0.95;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 20px;
  }
`;
