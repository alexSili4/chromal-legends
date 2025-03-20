import styled from '@emotion/styled';
import { IStyledProps } from './SectionTitle.types';

export const Title = styled.h1<IStyledProps>`
  color: ${({ isDark, theme }) => (isDark ? '#052D44' : theme.colors.white)};
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 24px;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    max-width: 969px;
    margin-left: auto;
    margin-right: auto;
    font-size: 48px;
  }
`;

export const Subtitle = styled.h2<IStyledProps>`
  color: ${({ isDark, theme }) => (isDark ? '#052D44' : theme.colors.white)};
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 24px;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    max-width: 969px;
    margin-left: auto;
    margin-right: auto;
    font-size: 48px;
  }
`;
