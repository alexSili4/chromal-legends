import { AboutCategoriesKeys, InputChangeFunc } from '@/types/types';

export interface IProps {
  categories: AboutCategoriesKeys;
  activeCategory: string;
  onChange: InputChangeFunc;
}
