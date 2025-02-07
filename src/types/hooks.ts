import { Func, NumberOrNull, RefDivObject } from './types';

export interface IUseAccordionElement {
  isShowElement: boolean;
  elementRef: RefDivObject;
  elementScrollHeight: NumberOrNull;
  toggleIsShowElement: Func;
}
