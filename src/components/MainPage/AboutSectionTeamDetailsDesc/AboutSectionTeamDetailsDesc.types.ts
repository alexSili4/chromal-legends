import { Characters, Team } from '@/types/aboutTeams.types';
import { FC } from 'react';

export interface IProps {
  desc: string;
  name: Team;
  characters: Characters;
  characterName: string;
  logo: FC;
}
