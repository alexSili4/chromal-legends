import { IGetTeamPlace } from '@/types/functions.types';

const getTeamPlace = (place: number): IGetTeamPlace => {
  const isFirstPlace = place === 1;
  const isSecondPlace = place === 2;
  const isThirdPlace = place === 3;

  return { isFirstPlace, isSecondPlace, isThirdPlace };
};

export default getTeamPlace;
