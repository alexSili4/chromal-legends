import { theme } from '@/constants';
import { getFlexItemWidth } from '@/utils';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const listGap = theme.spacing(26);
const stepWrapWidth = getFlexItemWidth({ listGap, listLength: 2 });

export const Container = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(8)}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    flex-direction: column;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${listGap}px;
  }
`;

export const FirstStepWrap = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;
  padding-top: ${({ theme }) => theme.spacing(4)}px;
  padding-bottom: ${({ theme }) => theme.spacing(2)}px;
  border-radius: 19px;
  background-color: rgba(5, 45, 68, 0.25);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(4)}px;
    width: calc(${stepWrapWidth});
    padding-top: ${({ theme }) => theme.spacing(5)}px;
    padding-bottom: ${({ theme }) => theme.spacing(3)}px;
    border-radius: 29px;
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 13px;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  text-shadow: -2px -2px 0 #021f2f, 2px -2px 0 #021f2f, -2px 2px 0 #021f2f,
    2px 2px 0 #021f2f, 0px 4px 0 #052d44, -2px 4px 0 #052d44, 2px 4px 0 #052d44;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 24px;
  }
`;

export const FirstStepContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(7)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(22)}px;
  }
`;

export const DescriptionWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const DescriptionTextWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 87px;
  height: 69px;
  border-radius: 19px;
  background-color: ${({ theme }) => theme.colors.white};

  & > svg {
    position: absolute;
    top: 37px;
    left: -17px;
    width: 53px;
    height: 51px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 158px;
    height: 120px;
    border-radius: 29px;

    & > svg {
      position: absolute;
      top: 87px;
      left: -28px;
      width: 118px;
      height: 110px;
    }
  }
`;

export const DescriptionTextNumber = styled.p`
  color: #052d44;
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 30px;
  font-weight: 400;
  line-height: 0.6;
  text-align: center;
  text-shadow: 0 1px 0 #062d44;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 56px;
    text-shadow: 0 2px 0 #062d44;
  }
`;

export const Text = styled.p`
  margin-top: ${({ theme }) => theme.spacing(12)}px;
  margin-left: ${({ theme }) => theme.spacing(5)}px;
  margin-right: ${({ theme }) => theme.spacing(12)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 64px;
  font-weight: 400;
  line-height: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    margin-top: ${({ theme }) => theme.spacing(21)}px;
    margin-left: ${({ theme }) => theme.spacing(9)}px;
    margin-right: ${({ theme }) => theme.spacing(22)}px;
  }
`;

export const DescriptionTextPart = styled.span`
  color: #052d44;
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 10px;
  font-weight: 400;
  line-height: 1.2;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 20px;
  left: -46px;
  width: 93px;
  max-width: 93px;
  height: 97px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 31px;
    left: -112px;
    width: 212px;
    max-width: 212px;
    height: 212px;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.proximaNova};
  font-size: 12px;
  font-weight: 700;
  line-height: 1.25;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
  }
`;

export const SecondStepWrap = styled(motion.div)`
  position: relative;
  padding-top: ${({ theme }) => theme.spacing(4)}px;
  border-radius: 29px;
  background-color: rgba(5, 45, 68, 0.25);

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    padding-bottom: ${({ theme }) => theme.spacing(38)}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: calc(${stepWrapWidth});
    padding-top: ${({ theme }) => theme.spacing(5)}px;
  }
`;

export const HeroLeftImg = styled.img`
  position: absolute;
  top: 82px;
  left: 0;
  width: 125px;
  height: 158px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 134px;
    left: -41px;
    width: 288px;
    height: 315px;
  }
`;

export const HeroCenterImg = styled.img`
  position: absolute;
  top: 56px;
  left: 99px;
  width: 110px;
  height: 172px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 76px;
    left: 139px;
    width: 253px;
    height: 344px;
  }
`;

export const HeroRightImg = styled.img`
  position: absolute;
  top: 56px;
  right: 6px;
  width: 112px;
  height: 184px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 64px;
    right: -20px;
    width: 259px;
    height: 368px;
  }
`;
