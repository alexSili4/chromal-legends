import styled from '@emotion/styled';
import { IStyledProps } from './SectionTitle.types';

export const Title = styled.h2<IStyledProps>`
  color: ${({ isDark, theme }) => (isDark ? '#052D44' : theme.colors.white)};
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 24px;
  font-weight: 400;
  line-height: 1;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 48px;
  }
`;
