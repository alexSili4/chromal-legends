import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: #a38ac5;
  padding-top: ${({ theme }) => theme.spacing(15)}px;
  padding-bottom: ${({ theme }) => theme.spacing(8)}px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)}px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(17)}px;
`;
