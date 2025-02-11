import styled from '@emotion/styled';

export const Section = styled.section`
  width: calc(100% + 16px + 16px);
  border: 16px solid #001d2c;
  border-top-width: 0;
  border-radius: 0px 0px 24px 24px;
  background-color: #79aad4;
  padding-top: ${({ theme }) => theme.spacing(15)}px;
  padding-bottom: ${({ theme }) => theme.spacing(8)}px;
  transform: translateX(-16px);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(11)}px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(11)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(41)}px;
  }
`;
