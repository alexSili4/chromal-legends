import { MouseEvent, RefObject } from 'react';

// events
export type BtnClickEvent = MouseEvent<HTMLButtonElement>;

// functions
export type Func = () => void;

// refs
export type RefListObject = RefObject<HTMLUListElement>;

export type RefDivObject = RefObject<HTMLDivElement>;

// other
export type NumberOrNull = number | null;
