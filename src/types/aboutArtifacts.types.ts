import { FC } from 'react';

export type Artifact =
  | 'ЛЕГЕНДАРНІ'
  | 'Артефакти швидкості'
  | 'Артефакти здоров’я'
  | 'Артефакти контролю';

export interface IImageInfo {
  img: string;
  topMob: number;
  leftMob: number;
  topDesk: number;
  leftDesk: number;
  widthMob: number;
  heightMob: number;
  widthDesk: number;
  heightDesk: number;
}

export interface IArtifactPreview {
  img: IImageInfo;
  name: {
    topMob: number;
    leftMob: number;
    topDesk: number;
    leftDesk: number;
    name: string;
  };
}

export type ArtifactsPreview = IArtifactPreview[];

export interface IArtifact {
  name: string;
  desc: string;
  img: IImageInfo;
  crownPosition: {
    leftMob: number;
    leftDesk: number;
  };
  paddingBottomMob: number;
}

export type Artifacts = IArtifact[];

export interface IAboutArtifact {
  name: Artifact;
  desc: string;
  logo: FC;
  preview: ArtifactsPreview;
  artifacts: Artifacts;
}

export type AboutArtifacts = IAboutArtifact[];

export type ArtifactOrNull = Artifact | null;
