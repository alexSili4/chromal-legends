import { FAQ } from '@/types/faq';
import { RefDivObject } from '@/types/types';

export interface IProps {
  faq: FAQ;
  listGap: number;
  elementItemRef: RefDivObject;
}

export interface IStyledListProps {
  listGap: number;
}
