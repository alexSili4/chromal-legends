import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)}px;
  border: 7px solid #052d44;
  border-radius: 24px;
  background-color: #ffe600;
  padding-top: ${({ theme }) => theme.spacing(9)}px;
  padding-bottom: ${({ theme }) => theme.spacing(8)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(10)}px;
    padding-bottom: ${({ theme }) => theme.spacing(12)}px;
  }
`;

export const Title = styled.p`
  color: #052d44;
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 24px;
  font-weight: 400;
  line-height: 1;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 48px;
  }
`;

export const Content = styled.div``;
