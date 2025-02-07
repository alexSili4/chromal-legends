import { NumberOrNull, RefDivObject } from '@/types/types';

export interface IProps {
  question: string;
  answer: string;
  elementItemRef: RefDivObject;
}

export interface IStyledAnswerWrapProps {
  isShowElement: boolean;
  elementScrollHeight: NumberOrNull;
}
