import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;
  padding-top: ${({ theme }) => theme.spacing(40)}px;
  padding-bottom: ${({ theme }) => theme.spacing(10)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing(0)}px;
    padding-top: ${({ theme }) => theme.spacing(77)}px;
    padding-bottom: ${({ theme }) => theme.spacing(0)}px;
    padding-right: ${({ theme }) => theme.spacing(19)}px;
  }
`;
