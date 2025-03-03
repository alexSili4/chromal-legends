import styled from '@emotion/styled';

export const Container = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    align-self: center;
  }
`;

export const BtnWrap = styled.div`
  border-radius: 18px;
  background-color: #052d44;
  padding: ${({ theme }) => theme.spacing()}px;
  padding-bottom: ${({ theme }) => theme.spacing(3)}px;
`;

export const StyledButton = styled.button`
  position: relative;
  width: 100%;
  border: none;
  border-radius: 16px;
  background-color: #ffc90b;
  padding-top: ${({ theme }) => theme.spacing(5)}px;
  padding-bottom: ${({ theme }) => theme.spacing(5)}px;

  & > svg {
    position: absolute;
    top: 8px;
    left: 8px;
    width: 20px;
    height: 20px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding: ${({ theme: { spacing } }) => `${spacing(5)}px ${spacing(13)}px`};
  }
`;

export const BtnTitle = styled.span`
  color: #052d44;
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 20px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  white-space: nowrap;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 32px;
  }
`;
