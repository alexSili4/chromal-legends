import { FAQ } from '@/types/faq';
import { NumberOrNull } from '@/types/types';

export interface IProps {
  faq: FAQ;
  maxItems: number;
}

export interface IStyledListWrapProps {
  height: NumberOrNull;
}
