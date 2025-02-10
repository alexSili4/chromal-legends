import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(11)}px;
`;

export const ListWrap = styled.div``;

export const BtnWrap = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacing()}px;
  padding-bottom: ${({ theme }) => theme.spacing(3)}px;
  border-radius: 18px;
  background-color: #052d44;
`;

export const Button = styled.button`
  position: relative;
  width: 100%;
  padding: 0;
  border: none;
  border-radius: 16px;
  background-color: #ffc90b;
  color: #052d44;
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 20px;
  font-weight: 400;
  line-height: 3.2;
  text-transform: uppercase;

  & > svg {
    position: absolute;
    top: 8px;
    left: 8px;
  }
`;
