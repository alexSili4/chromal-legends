import { Characters, Team } from '@/types/aboutTeams';
import { FC } from 'react';

export interface IProps {
  desc: string;
  name: Team;
  characters: Characters;
  characterName: string;
  logo: FC;
}
