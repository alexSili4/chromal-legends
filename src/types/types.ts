import { AboutCategories } from '@/constants';
import { ChangeEvent, MouseEvent, RefObject } from 'react';

// events
export type AnchorClickEvent = MouseEvent<HTMLAnchorElement>;

export type BtnClickEvent = MouseEvent<HTMLButtonElement>;

export type DivClickEvent = MouseEvent<HTMLDivElement>;

export type InputChangeEvent = ChangeEvent<HTMLInputElement>;

// functions
export type Func = () => void;

export type InputChangeFunc = (e: InputChangeEvent) => void;

export type OnBtnClickFunc = (e: BtnClickEvent) => void;

export type OnDivClickFunc = (e: DivClickEvent) => void;

// refs
export type RefListObject = RefObject<HTMLUListElement>;

export type RefDivObject = RefObject<HTMLDivElement>;

// other
export type StringOrNull = string | null;

export type NumberOrNull = number | null;

export type ElementOrNull = Element | null;

export type AboutCategoriesKeys = AboutCategories[];
