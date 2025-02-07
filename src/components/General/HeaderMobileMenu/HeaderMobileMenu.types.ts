import { NavLinks } from '@/types/navLinks';
import { NumberOrNull } from '@/types/types';

export interface IProps {
  navLinks: NavLinks;
}

export interface IStyledListWrapProps {
  isShowElement: boolean;
  elementScrollHeight: NumberOrNull;
}

export interface IStyledButtonProps {
  isShowList: boolean;
}
