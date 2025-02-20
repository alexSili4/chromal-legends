import {
  IGetActiveArtifact,
  IGetActiveArtifactProps,
} from '@/types/functions.types';

const getActiveArtifact = ({
  isArtifactsCategory,
  activeArtifact,
}: IGetActiveArtifactProps): IGetActiveArtifact => {
  const isLegendaryArtifact = activeArtifact === 'ЛЕГЕНДАРНІ';
  const isSpeedArtifact = activeArtifact === 'Артефакти швидкості';
  const isHealthArtifact = activeArtifact === 'Артефакти здоров’я';
  const isControlArtifact = activeArtifact === 'Артефакти контролю';

  const isActiveLegendaryArtifact = isArtifactsCategory && isLegendaryArtifact;
  const isActiveSpeedArtifact = isArtifactsCategory && isSpeedArtifact;
  const isActiveHealthArtifact = isArtifactsCategory && isHealthArtifact;
  const isActiveControlArtifact = isArtifactsCategory && isControlArtifact;

  return {
    isActiveLegendaryArtifact,
    isActiveSpeedArtifact,
    isActiveHealthArtifact,
    isActiveControlArtifact,
  };
};

export default getActiveArtifact;
