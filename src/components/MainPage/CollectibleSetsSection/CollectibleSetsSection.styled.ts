import styled from '@emotion/styled';
import sectionBottomBg from '@/images/collectible-sets/section-bottom-bg.png';
import sectionTopBg from '@/images/collectible-sets/section-top-bg.png';

export const Section = styled.section`
  position: relative;
  overflow: hidden;
`;

export const Background = styled.div`
  width: calc(100% + 16px + 16px);
  border: 16px solid #001d2c;
  border-bottom-width: 0;
  border-radius: 40px 40px 0px 0px;
  padding-top: ${({ theme }) => theme.spacing(15)}px;
  padding-bottom: ${({ theme }) => theme.spacing(8)}px;
  background-color: #80b5e2;
  background-image: url(${sectionBottomBg}), url(${sectionTopBg});
  background-position: bottom 0 left 0;
  background-size: 1920px 242px, 1920px 629px;
  background-repeat: no-repeat;
  transform: translateX(-16px);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(17)}px;
    padding-bottom: ${({ theme }) => theme.spacing(6)}px;
    background-size: contain;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(12)}px;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(6)}px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(10)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(8)}px;
  }
`;
