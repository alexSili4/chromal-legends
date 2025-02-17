import { AboutCategories } from '@/constants';
import { MouseEvent, RefObject } from 'react';

// events
export type BtnClickEvent = MouseEvent<HTMLButtonElement>;

export type DivClickEvent = MouseEvent<HTMLDivElement>;

// functions
export type Func = () => void;

export type OnBtnClickFunc = (e: BtnClickEvent) => void;

export type OnDivClickFunc = (e: DivClickEvent) => void;

// refs
export type RefListObject = RefObject<HTMLUListElement>;

export type RefDivObject = RefObject<HTMLDivElement>;

// other
export type NumberOrNull = number | null;

export type ElementOrNull = Element | null;

export type AboutCategoriesKeys = AboutCategories[];
