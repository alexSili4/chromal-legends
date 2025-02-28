import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Text = styled.p`
  color: #052d44;
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 18px;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    max-width: 267px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 24px;
  }
`;
