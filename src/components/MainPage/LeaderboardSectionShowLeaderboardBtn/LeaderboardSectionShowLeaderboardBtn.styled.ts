import styled from '@emotion/styled';

export const Container = styled.div``;

export const BtnWrap = styled.div`
  border-radius: 18px;
  background-color: #052d44;
  padding: ${({ theme }) => theme.spacing()}px;
  padding-bottom: ${({ theme }) => theme.spacing(3)}px;
`;

export const Button = styled.button`
  position: relative;
  width: 100%;
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
`;

export const BtnTitle = styled.span`
  color: #052d44;
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 20px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
`;
