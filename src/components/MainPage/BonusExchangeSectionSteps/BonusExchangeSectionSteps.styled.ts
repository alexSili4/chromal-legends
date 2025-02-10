import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)}px;
`;

export const FirstStepWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;
  padding-top: ${({ theme }) => theme.spacing(4)}px;
  padding-bottom: ${({ theme }) => theme.spacing(2)}px;
  border-radius: 19px;
  background-color: rgba(5, 45, 68, 0.25);
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 13px;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  stroke: #021f2f;
  stroke-width: 2px;
  paint-order: stroke;
  filter: drop-shadow(0px 2px 0px #052d44);
`;

export const FirstStepContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(7)}px;
`;

export const DescriptionWrap = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(5)}px;
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
`;

export const DescriptionTextNumber = styled.p`
  color: #052d44;
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 30px;
  font-weight: 400;
  line-height: 1;
  text-align: center;
`;

export const Text = styled.p`
  margin-top: ${({ theme }) => theme.spacing(12)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 64px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0px;
  text-align: left;
`;

export const DescriptionTextPart = styled.span`
  color: #052d44;
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 10px;
  font-weight: 400;
  line-height: 1.2;
`;

export const Image = styled.img`
  position: absolute;
  top: 20px;
  left: -46px;
  width: 93px;
  max-width: 93px;
  height: 97px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.proximaNova};
  font-size: 12px;
  font-weight: 700;
  line-height: 1.25;
  text-align: center;
`;

export const SecondStepWrap = styled.div`
  position: relative;
  padding-top: ${({ theme }) => theme.spacing(4)}px;
  padding-bottom: ${({ theme }) => theme.spacing(38)}px;
  border-radius: 29px;
  background-color: rgba(5, 45, 68, 0.25);
`;

export const HeroLeftImg = styled.img`
  position: absolute;
  top: 82px;
  left: 0;
  width: 125px;
  height: 158px;
`;

export const HeroCenterImg = styled.img`
  position: absolute;
  top: 56px;
  left: 99px;
  width: 110px;
  height: 172px;
`;

export const HeroRightImg = styled.img`
  position: absolute;
  top: 56px;
  right: 6px;
  width: 112px;
  height: 184px;
`;
