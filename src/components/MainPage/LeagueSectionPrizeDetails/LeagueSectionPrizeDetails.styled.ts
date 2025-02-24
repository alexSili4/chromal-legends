import styled from '@emotion/styled';
import {
  IStyledContainerProps,
  IStyledNameProps,
} from './LeagueSectionPrizeDetails.types';

export const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background-color: transparent;
`;

export const Image = styled.img`
  width: 161px;
  height: 154px;
  transition: transform ${({ theme }) => theme.transitionDurationAndFunc};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 100%;
    height: 205px;
  }

  button:is(:hover, :focus) > & {
    transform: scale(1.1);
  }
`;

export const Container = styled.span<IStyledContainerProps>`
  position: absolute;
  bottom: ${({ isPrizeInfo }) => (isPrizeInfo ? -47 : -35)}px;
  left: -29px;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    bottom: ${({ isPrizeInfo }) => (isPrizeInfo ? -71 : -54)}px;
    left: ${({ isPrizeInfo }) => (isPrizeInfo ? -27 : -52)}px;
    gap: ${({ theme }) => theme.spacing(4)}px;
  }
`;

export const RankWrap = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    width: 70px;
    height: 70px;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
      width: 108px;
      height: 108px;
    }
  }
`;

export const Rank = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuy};
  font-size: 30px;
  font-weight: 400;
  line-height: 1;
  text-shadow: -2px 0px 0 #052d44, -2px -2px 0 #052d44, 2px -2px 0 #052d44,
    -2px 2px 0 #052d44, 2px 2px 0 #052d44, 0px 4px 0 #052d44, -2px 4px 0 #052d44,
    2px 4px 0 #052d44;
  transform: translateX(-50%) translateY(-50%);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 34px;
  }
`;

export const Name = styled.span<IStyledNameProps>`
  width: ${({ isPrizeInfo }) => (isPrizeInfo ? '190px' : 'auto')};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: ${({ isPrizeInfo }) => (isPrizeInfo ? 16 : 24)}px;
  font-weight: 400;
  line-height: 1;
  text-shadow: -2px 0px 0 #021f2f, -2px -2px 0 #021f2f, 2px -2px 0 #021f2f,
    -2px 2px 0 #021f2f, 2px 2px 0 #021f2f, 0px 4px 0 #052d44, -2px 4px 0 #052d44,
    2px 4px 0 #052d44;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: ${({ isPrizeInfo }) => (isPrizeInfo ? '253px' : 'auto')};
    font-size: ${({ isPrizeInfo }) => (isPrizeInfo ? 24 : 36)}px;
  }
`;
