import styled from '@emotion/styled';
import sectionBgMob from '@/images/leaderboard/section-bg-mob.png';
import sectionBgDesk from '@/images/leaderboard/section-bg-desk.png';

export const Section = styled.section`
  width: calc(100% + 16px + 16px);
  border: 16px solid #001d2c;
  border-top-width: 0;
  border-radius: 0px 0px 24px 24px;
  background-color: #79aad4;
  padding-top: ${({ theme }) => theme.spacing(13)}px;
  padding-bottom: ${({ theme }) => theme.spacing(11)}px;
  background-image: url(${sectionBgMob});
  background-position: left 0 bottom 0;
  background-size: contain;
  background-repeat: no-repeat;
  transform: translateX(-16px);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-bottom: ${({ theme }) => theme.spacing(13)}px;
    background-image: url(${sectionBgDesk});
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(10)}px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(12)}px;
  border-radius: 24px;
  background-color: rgba(5, 45, 68, 0.3);
  padding-top: ${({ theme }) => theme.spacing(10)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(17)}px;
    padding-top: ${({ theme }) => theme.spacing(8)}px;
  }
`;
