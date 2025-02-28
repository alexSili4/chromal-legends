import { SetBooleanFunc, SetStringOrNullFunc } from '@/types/functions.types';
import { StringOrNull } from '@/types/types';

export interface IProps {
  error: StringOrNull;
  updateError: SetStringOrNullFunc;
  updateIsSuccess: SetBooleanFunc;
}
