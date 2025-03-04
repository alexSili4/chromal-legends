import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { IStyledImageProps } from './AnimatedAboutChromaLegends.types';
import descBgMob from '@/images/about/desc-bg-mob-min.png';
import descBgDesk from '@/images/about/desc-bg-desk-min.png';
import textBgMob from '@/images/about/text-bg-mob-min.png';
import textBgDesk from '@/images/about/text-bg-desk-min.png';

export const Container = styled(motion.div)`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    padding-bottom: ${({ theme }) => theme.spacing(10)}px;
  }
`;

export const Background = styled.div`
  padding: ${({ theme }) => theme.spacing(3)}px;
  padding-bottom: ${({ theme }) => theme.spacing(64)}px;
  border-radius: 18px;
  background-color: rgba(5, 45, 68, 0.25);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-bottom: ${({ theme }) => theme.spacing(42)}px;
    border-radius: 24px;
  }
`;

export const Content = styled.div`
  position: relative;
`;

export const DescWrap = styled.div`
  padding: ${({ theme }) => theme.spacing(4)}px;
  padding-bottom: ${({ theme }) => theme.spacing(17)}px;
  background-image: url(${descBgMob});
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 587px;
    padding-top: ${({ theme }) => theme.spacing(11)}px;
    padding-right: ${({ theme }) => theme.spacing(27)}px;
    padding-bottom: ${({ theme }) => theme.spacing(21)}px;
    padding-left: ${({ theme }) => theme.spacing(9)}px;
    background-image: url(${descBgDesk});
  }
`;

export const Desc = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.38;
  text-shadow: -1px -1px 0 ${({ theme }) => theme.colors.black},
    1px -1px 0 ${({ theme }) => theme.colors.black},
    -1px 1px 0 ${({ theme }) => theme.colors.black},
    1px 1px 0 ${({ theme }) => theme.colors.black}, 0px 3px 0 #052d44,
    -1px 3px 0 #052d44, 1px 3px 0 #052d44;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 24px;
    line-height: 1.25;
    text-shadow: -1px -1px 0 ${({ theme }) => theme.colors.black},
      1px -1px 0 ${({ theme }) => theme.colors.black},
      -1px 1px 0 ${({ theme }) => theme.colors.black},
      1px 1px 0 ${({ theme }) => theme.colors.black}, 0px 6px 0 #052d44,
      -1px 6px 0 #052d44, 1px 6px 0 #052d44;
  }
`;

export const TextWrap = styled(motion.div)`
  position: absolute;
  top: 157px;
  left: 32px;
  width: 231px;
  padding: ${({ theme }) => theme.spacing(5)}px;
  padding-bottom: ${({ theme }) => theme.spacing(5)}px;
  background-image: url(${textBgMob});
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 208px;
    left: 98px;
    width: 405px;
    padding: ${({ theme }) => theme.spacing(8)}px;
    padding-right: ${({ theme }) => theme.spacing(21)}px;
    background-image: url(${textBgDesk});
  }
`;

export const Text = styled.p`
  color: #052d44;
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 22px;
    line-height: 1.36;
  }
`;

export const Image = styled(motion.img)<IStyledImageProps>`
  position: absolute;
  top: ${({ topMob }) => topMob}px;
  left: ${({ leftMob }) => leftMob}px;
  width: ${({ widthMob }) => widthMob}px;
  max-width: ${({ widthMob }) => widthMob}px;
  height: ${({ heightMob }) => heightMob}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: ${({ topDesk }) => topDesk}px;
    left: ${({ leftDesk }) => leftDesk}px;
    width: ${({ widthDesk }) => widthDesk}px;
    max-width: ${({ widthDesk }) => widthDesk}px;
    height: ${({ heightDesk }) => heightDesk}px;
  }
`;
