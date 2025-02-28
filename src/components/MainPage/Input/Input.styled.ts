import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(3)}px;
  }
`;

export const Title = styled.p`
  color: #052d44;
  font-family: ${({ theme }) => theme.fontFamily.proximaNova};
  font-size: 14px;
  font-weight: 700;
  line-height: 1.22;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing()}px;
`;

export const StyledInput = styled.input`
  box-sizing: border-box;
  border: 1px solid #001d2c;
  border-radius: 12px;
  box-shadow: 0px 4px 0px 0px #052d44;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme: { spacing } }) => `${spacing(4)}px ${spacing(8)}px`};
  outline: none;
  color: #052d44;
  font-family: ${({ theme }) => theme.fontFamily.proximaNova};
  font-size: 15px;
  font-weight: 700;
  line-height: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 30px;
  }
`;

export const Desc = styled.p`
  color: #001d2c;
  font-family: ${({ theme }) => theme.fontFamily.proximaNova};
  font-size: 12px;
  font-weight: 400;
  line-height: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 14px;
  }
`;
