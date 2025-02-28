import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(14)}px;
  border: 7px solid #052d44;
  border-radius: 24px;
  background-color: #a0c7e9;
  padding-top: ${({ theme }) => theme.spacing(8)}px;
  padding-bottom: ${({ theme }) => theme.spacing(4)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(10)}px;
    padding-bottom: ${({ theme }) => theme.spacing(11)}px;
    padding-left: ${({ theme }) => theme.spacing(20)}px;
    padding-right: ${({ theme }) => theme.spacing(20)}px;
  }
`;

export const Text = styled.p`
  max-width: 229px;
  color: #052d44;
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    max-width: 472px;
    font-size: 24px;
  }
`;

export const Image = styled.img`
  flex-shrink: 0;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    max-width: 360px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 670px;
  }
`;
