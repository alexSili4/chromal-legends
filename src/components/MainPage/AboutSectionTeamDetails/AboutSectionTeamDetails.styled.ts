import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;
  padding-top: ${({ theme }) => theme.spacing(40)}px;
  padding-bottom: ${({ theme }) => theme.spacing(10)}px;
`;

export const SliderBtn = styled.button``;
