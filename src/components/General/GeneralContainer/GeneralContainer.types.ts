import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  isHiddenOnMobile?: boolean;
  isPositionRelative?: boolean;
}

export interface IStyledProps {
  isPositionRelative: boolean;
  isHiddenOnMobile: boolean;
}
