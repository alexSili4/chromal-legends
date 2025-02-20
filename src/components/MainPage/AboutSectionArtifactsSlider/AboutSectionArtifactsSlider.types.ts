import { AboutArtifacts } from '@/types/aboutArtifacts.types';
import { SetActiveArtifactFunc } from '@/types/functions.types';

export interface IProps {
  artifacts: AboutArtifacts;
  updateActiveArtifact: SetActiveArtifactFunc;
}
