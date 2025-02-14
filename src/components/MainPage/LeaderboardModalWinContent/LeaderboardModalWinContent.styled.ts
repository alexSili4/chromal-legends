import styled from '@emotion/styled';

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)}px;
  border: 7px solid #052d44;
  border-radius: 24px;
  background-color: #ffe600;
  padding: ${({ theme }) => theme.spacing(8)}px;
  padding-top: ${({ theme }) => theme.spacing(9)}px;
`;

export const Title = styled.p`
  color: #052d44;
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 24px;
  font-weight: 400;
  line-height: 1;
  text-align: center;
`;

export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)}px;
  padding: ${({ theme }) => theme.spacing(2)}px;
  padding-top: ${({ theme }) => theme.spacing(8)}px;
  border-radius: 18px;
  background-color: #052d44;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  text-align: center;
`;
