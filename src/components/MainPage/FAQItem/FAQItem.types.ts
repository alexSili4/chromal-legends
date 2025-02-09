import { NumberOrNull } from '@/types/types';

export interface IProps {
  question: string;
  answer: string;
}

export interface IStyledAnswerWrapProps {
  isShowElement: boolean;
  elementScrollHeight: NumberOrNull;
}
