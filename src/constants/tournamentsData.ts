import { ITournamentsData, Tournaments } from '@/types/tournaments.types';

const tournaments: Tournaments = [
  {
    title: 'Приборкувачі Тіней',
    clans: [
      { name: 'Королівські Ельфи', totalScore: '3005' },
      { name: 'Бойові Ніндзя', totalScore: '2300' },
      { name: 'Незабутні Гуманоїди', totalScore: '2200' },
    ],
  },
];

const tournamentsData: ITournamentsData = {
  current: 'Крижані Легенди',
  tournaments,
};

export default tournamentsData;
