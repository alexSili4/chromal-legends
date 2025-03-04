import styled from '@emotion/styled';
import cardBgMob from '@/images/collectible-sets/card-bg-mob-min.png';
import cardBgDesk from '@/images/collectible-sets/card-bg-desk-min.png';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 296px;
  height: 194px;
  background-image: url(${cardBgMob});
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: repeat;
  padding-top: ${({ theme }) => theme.spacing(3)}px;
  padding-right: ${({ theme }) => theme.spacing(3)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 100%;
    height: 360px;
    background-image: url(${cardBgDesk});
    padding-top: ${({ theme }) => theme.spacing(5)}px;
    padding-right: ${({ theme }) => theme.spacing(5)}px;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing()}px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 13px;
  font-weight: 400;
  line-height: 1;
  text-align: right;
  text-shadow: -2px -2px 0 #021f2f, 2px -2px 0 #021f2f, -2px 2px 0 #021f2f,
    2px 2px 0 #021f2f, 0px 4px 0 #052d44, -2px 4px 0 #052d44, 2px 4px 0 #052d44;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 24px;
  }
`;

export const Desc = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.proximaNova};
  font-size: 11px;
  font-weight: 800;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 20px;
  }
`;

export const PriceWrapBg = styled.div`
  position: absolute;
  bottom: 0;
  right: -10px;
  border-radius: 12px;
  background: #052d44;
  padding: ${({ theme }) => theme.spacing()}px;
  padding-bottom: ${({ theme }) => theme.spacing(2)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    right: -38px;
    border-radius: 24px;
  }
`;

export const PriceWrap = styled.div`
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme: { spacing } }) => `${spacing(4)}px ${spacing(3)}px`};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    border-radius: 20px;
    padding: ${({ theme: { spacing } }) => `${spacing(9)}px ${spacing(6)}px`};
  }
`;

export const Price = styled.p`
  color: #052d44;
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 20px;
  font-weight: 400;
  line-height: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 40px;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: -1px;
  left: -10px;
  width: 286px;
  max-width: 286px;
  height: 194px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    left: -20px;
    width: 532px;
    max-width: 532px;
    height: 361px;
  }
`;
