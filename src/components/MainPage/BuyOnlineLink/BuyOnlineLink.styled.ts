import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  border-radius: 18px;
  background-color: #052d44;
  padding: ${({ theme }) => theme.spacing()}px;
  padding-bottom: ${({ theme }) => theme.spacing(3)}px;
`;

export const Link = styled.a`
  display: flex;
  border-radius: 16px;
  background-color: #ffc90b;
`;

export const Content = styled.span`
  position: relative;
  display: flex;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(5)}px;

  & > svg {
    position: absolute;
    top: 8px;
    left: 8px;
    width: 20px;
    height: 20px;
  }
`;

export const LinkTitle = styled.span`
  width: 100%;
  color: #052d44;
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 20px;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  text-transform: uppercase;
`;
