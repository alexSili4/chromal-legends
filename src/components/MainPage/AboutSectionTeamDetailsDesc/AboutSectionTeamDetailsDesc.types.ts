import { CharactersPreview, Team } from '@/types/aboutTeams.types';
import { FC } from 'react';

export interface IProps {
  desc: string;
  name: Team;
  characters: CharactersPreview;
  characterName: string;
  logo: FC;
}
