import {
  Artifact,
  Artifacts,
  ArtifactsPreview,
} from '@/types/aboutArtifacts.types';
import { FC } from 'react';

export interface IProps {
  name: Artifact;
  desc: string;
  logo: FC;
  artifacts: Artifacts;
  preview: ArtifactsPreview;
}

export interface IStyledContainerProps {
  paddingBottomMob: number;
}
