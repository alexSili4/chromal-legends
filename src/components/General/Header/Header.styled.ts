import styled from '@emotion/styled';
import bgImg from '@/images/header/header-bg-min.jpg';

export const StyledHeader = styled.header`
  position: relative;
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
`;

export const Container = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
  }
`;

export const Info = styled.div``;

export const Border = styled.div`
  height: 59px;
  background-color: rgba(255, 255, 255, 0.25);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: none;
  }
`;

export const GeneralInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(80)}px;
  padding-top: ${({ theme }) => theme.spacing(10)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(19)}px;
    padding-top: ${({ theme }) => theme.spacing(37)}px;
  }
`;

export const Content = styled.div`
  position: relative;
  padding-bottom: ${({ theme }) => theme.spacing(15)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-bottom: ${({ theme }) => theme.spacing(40)}px;
  }
`;
