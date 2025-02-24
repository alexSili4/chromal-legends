import { Characters, CharactersPreview, Team } from '@/types/aboutTeams.types';
import { FC } from 'react';

export interface IProps {
  name: Team;
  desc: string;
  characters: Characters;
  logo: FC;
  preview: CharactersPreview;
}

export interface IStyledContainerProps {
  paddingBottomMob: number;
}
