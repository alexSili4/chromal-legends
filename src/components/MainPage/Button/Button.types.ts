import { BtnType, OnBtnClickFunc } from '@/types/types';

export interface IProps {
  title: string;
  disabled?: boolean;
  type?: BtnType;
  onClick?: OnBtnClickFunc;
}
