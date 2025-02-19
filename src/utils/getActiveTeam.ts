import { IGetActiveTeam, IGetActiveTeamProps } from '@/types/functions.types';

const getActiveTeam = ({
  isTeamsCategory,
  activeTeam,
}: IGetActiveTeamProps): IGetActiveTeam => {
  const isChromatekTeam = activeTeam === 'Корпорація Хроматек';
  const isColorMastersTeam = activeTeam === 'Клан Майстрів Кольору';
  const isFaunasphereRebelsTeam = activeTeam === 'Бунтарі Фаунасферії';
  const isChronographyInstituteTeam = activeTeam === 'інститут Хронографії';
  const isLegendaryTeam = activeTeam === 'ЛЕГЕНДАРНІ';

  const isActiveChromatekTeam = isTeamsCategory && isChromatekTeam;
  const isActiveColorMastersTeam = isTeamsCategory && isColorMastersTeam;
  const isActiveFaunasphereRebelsTeam =
    isTeamsCategory && isFaunasphereRebelsTeam;
  const isActiveChronographyInstituteTeam =
    isTeamsCategory && isChronographyInstituteTeam;
  const isActiveLegendaryTeam = isTeamsCategory && isLegendaryTeam;

  return {
    isActiveChromatekTeam,
    isActiveColorMastersTeam,
    isActiveFaunasphereRebelsTeam,
    isActiveLegendaryTeam,
    isActiveChronographyInstituteTeam,
  };
};

export default getActiveTeam;
