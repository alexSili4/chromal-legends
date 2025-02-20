import { Artifact, Artifacts } from '@/types/aboutArtifacts.types';
import { FC } from 'react';

export interface IProps {
  desc: string;
  name: Artifact;
  artifacts: Artifacts;
  currentArtifactName: string;
  logo: FC;
}
