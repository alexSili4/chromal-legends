import {
  ElementOrNull,
  Func,
  NumberOrNull,
  OnDivClickFunc,
  RefDivObject,
} from './types';

export interface IUseAccordionElement {
  isShowElement: boolean;
  elementRef: RefDivObject;
  elementScrollHeight: NumberOrNull;
  toggleIsShowElement: Func;
}

export interface IUseModalWinProps {
  setModalWinState: Func;
  showModalWin: boolean;
}

export interface IUseModalWin {
  modalRoot: ElementOrNull;
  hideModalWin: OnDivClickFunc;
}

export interface IUseTopGap {
  topGap: NumberOrNull;
  sectionRef: RefDivObject;
}
