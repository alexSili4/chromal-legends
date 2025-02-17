import { IGetTeamPlace } from '@/types/functions.types';
import { NumberOrNull } from '@/types/types';

const getTeamPlace = (place: NumberOrNull): IGetTeamPlace => {
  const isFirstPlace = place === 1;
  const isSecondPlace = place === 2;
  const isThirdPlace = place === 3;

  return { isFirstPlace, isSecondPlace, isThirdPlace };
};

export default getTeamPlace;
