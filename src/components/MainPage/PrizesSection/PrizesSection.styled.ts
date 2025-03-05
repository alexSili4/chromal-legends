import styled from '@emotion/styled';
import sectionBottomBgDesk from '@/images/prizes/section-bottom-bg-desk-min.png';
import sectionTopBgDesk from '@/images/prizes/section-top-bg-desk-min.png';
import sectionBottomBgMob from '@/images/prizes/section-bottom-bg-mob-min.png';
import sectionTopBgMob from '@/images/prizes/section-top-bg-mob-min.png';

export const Section = styled.section`
  position: relative;
  overflow: hidden;
`;

export const Background = styled.div`
  position: relative;
  z-index: 10;
  width: calc(100% + 16px + 16px);
  border: 16px solid #001d2c;
  border-top-width: 0;
  border-radius: 0px 0px 40px 40px;
  background-color: #79aad4;
  padding-top: ${({ theme }) => theme.spacing(15)}px;
  padding-bottom: ${({ theme }) => theme.spacing(8)}px;
  background-image: url(${sectionBottomBgMob}), url(${sectionTopBgMob});
  background-position: bottom 0 left 0, top 65px left 0;
  background-size: contain, 100% auto;
  background-repeat: no-repeat;
  transform: translateX(-16px);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    background-image: url(${sectionBottomBgDesk}), url(${sectionTopBgDesk});
  }
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
