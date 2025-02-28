import { IRegExp } from '@/types/types';

const regExp: IRegExp = {
  digitsOnly: /^\d+$/,
  phone: /^[\d+\-()\s]+$/,
};

export default regExp;
