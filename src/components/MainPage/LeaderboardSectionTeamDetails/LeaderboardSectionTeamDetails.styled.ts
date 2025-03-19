import styled from '@emotion/styled';
import scoreBgMob from '@/images/leaderboard/score-bg-mob-min.png';
import scoreBgDesk from '@/images/leaderboard/score-bg-desk-min.png';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(6)}px;
  padding-left: ${({ theme }) => theme.spacing(6)}px;

  *:first-of-type > & {
    padding-top: ${({ theme }) => theme.spacing(6)}px;
  }

  *:last-of-type > & {
    padding-bottom: ${({ theme }) => theme.spacing(6)}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(11)}px;
    padding-left: ${({ theme }) => theme.spacing(9)}px;

    *:last-of-type > & {
      padding-bottom: ${({ theme }) => theme.spacing(10)}px;
    }
  }
`;

export const RankWrap = styled.div`
  /* flex-shrink: 0; */
  position: relative;

  & > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 46px;
    height: 46px;
    transform: translateX(-50%) translateY(-50%);

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
      width: 80px;
      height: 80px;
    }
  }
`;

export const Rank = styled.p`
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuy};
  font-size: 26px;
  font-weight: 400;
  line-height: 1;
  text-shadow: -2px 0px 0 #052d44, -2px -2px 0 #052d44, 2px -2px 0 #052d44,
    -2px 2px 0 #052d44, 2px 2px 0 #052d44, 0px 4px 0 #052d44, -2px 4px 0 #052d44,
    2px 4px 0 #052d44;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 50px;
  }
`;

export const Info = styled.div`
  /* flex-shrink: 0; */
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)}px;
  padding: ${({ theme }) => theme.spacing(3)}px;
  padding-bottom: ${({ theme }) => theme.spacing(2)}px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0;
    padding: 0;
    border-radius: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    background-image: url(${scoreBgMob});
    background-position: bottom -1px left 0;
    background-size: 100% 50%;
    background-repeat: no-repeat;
  }
`;

export const NameWrap = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-left: ${({ theme }) => theme.spacing(4)}px;
  }
`;

export const Name = styled.p`
  color: #052d44;
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.14;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 32px;
    line-height: 1.75;
  }
`;

export const ScoreWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing()}px;

  & > svg {
    width: 15px;
    height: 15px;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
      position: absolute;
      top: 50%;
      left: -12px;
      width: 96px;
      height: 96px;
      transform: translateY(-50%);
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(6)}px;
    padding-right: ${({ theme }) => theme.spacing(8)}px;
    padding-bottom: ${({ theme }) => theme.spacing(6)}px;
    padding-left: ${({ theme }) => theme.spacing(22)}px;
    background-image: linear-gradient(to right, #052d44, #052d44),
      url(${scoreBgDesk});
    background-position: left 40px top 0px, left 0 top 0;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const Score = styled.p`
  color: #ffc90b;
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuy};
  font-size: 14px;
  font-weight: 400;
  line-height: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 48px;
    line-height: 1.17;
  }
`;
