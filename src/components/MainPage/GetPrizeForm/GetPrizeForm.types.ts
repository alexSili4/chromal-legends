import { SetStringOrNullFunc, SetBooleanFunc } from '@/types/functions.types';
import { StringOrNull } from '@/types/types';

export interface IProps {
  error: StringOrNull;
  updateIsSuccess: SetBooleanFunc;
  updateError: SetStringOrNullFunc;
}
