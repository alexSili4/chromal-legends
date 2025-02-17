import styled from '@emotion/styled';

export const Section = styled.section`
  padding-bottom: ${({ theme }) => theme.spacing(4)}px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(13)}px;
`;
