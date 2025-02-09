import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(11)}px;
`;

export const ListWrap = styled.div`
 
`;

export const Button = styled.button`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: none;
  }
`;
