import { Artifact, Artifacts } from '@/types/aboutArtifacts.types';
import { FC } from 'react';

export interface IProps {
  artifacts: Artifacts;
  artifactDesc: string;
  logo: FC;
  artifactName: Artifact;
  heightMob: number;
  heightDesk: number;
  crownTopMob: number;
  crownTopDesk: number;
  crownLeftMob: number;
  crownLeftDesk: number;
  characterDesc: string;
  imgLeftDesk: number;
  imgLeftMob: number;
  img: string;
  imgTopDesk: number;
  imgTopMob: number;
  currentArtifactName: string;
  widthDesk: number;
  widthMob: number;
  paddingBottomMob: number;
}

export interface IStyledContainerProps {
  paddingBottomMob: number;
}
