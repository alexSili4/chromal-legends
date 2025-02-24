import { Artifact, ArtifactsPreview } from '@/types/aboutArtifacts.types';
import { SetNumberFunc } from '@/types/functions.types';
import { FC } from 'react';

export interface IProps {
  desc: string;
  name: Artifact;
  preview: ArtifactsPreview;
  artifactName: string;
  logo: FC;
  updateActiveIndex: SetNumberFunc;
}
