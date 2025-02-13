import styled from '@emotion/styled';

export const Section = styled.section`
  width: calc(100% + 16px + 16px);
  border: 16px solid #001d2c;
  border-top-width: 0;
  border-radius: 0px 0px 24px 24px;
  background-color: #79aad4;
  padding-top: ${({ theme }) => theme.spacing(13)}px;
  padding-bottom: ${({ theme }) => theme.spacing(11)}px;
  transform: translateX(-16px);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)}px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(12)}px;
  border-radius: 24px;
  background-color: rgba(5, 45, 68, 0.3);
  padding-top: ${({ theme }) => theme.spacing(10)}px;
  padding-bottom: ${({ theme }) => theme.spacing(254)}px;
`;
