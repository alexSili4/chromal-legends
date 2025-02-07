import styled from '@emotion/styled';
import sectionBg from '@/images/faq/section-bg.png';

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.spacing(15)}px;
  padding-bottom: ${({ theme }) => theme.spacing(19)}px;
  background-image: linear-gradient(
      180deg,
      #ffe600,
      rgba(255, 255, 255, 0) 100%
    ),
    url(${sectionBg});
  background-size: 100% 100%, 993px 719px;
  background-position: bottom left;
  background-repeat: no-repeat;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    background-size: 100% 100%, 100% auto;
    background-position: bottom 0 left 50%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(13)}px;
    padding-bottom: ${({ theme }) => theme.spacing(16)}px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(13)}px;
  }
`;
