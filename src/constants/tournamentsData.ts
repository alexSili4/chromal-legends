import { ITournamentsData, Tournaments } from '@/types/tournaments.types';

const tournaments: Tournaments = [
  {
    title: 'Крижані Легенди',
    clans: [
      {
        name: 'Бойові Ніндзя',
        totalScore: '4145',
      },
      {
        name: 'Прудкі Чемпіони',
        totalScore: '3260',
      },
      {
        name: 'Обережні Демони',
        totalScore: '2265',
      },
      {
        name: 'Королівські Ельфи',
        totalScore: '1835',
      },
      {
        name: 'Незабутні Гуманоїди',
        totalScore: '1015',
      },
      {
        name: 'Міфічні Воїни',
        totalScore: '1000',
      },
      {
        name: 'Суворі Деруни',
        totalScore: '775',
      },
      {
        name: 'Хитрі Характерники',
        totalScore: '760',
      },
      {
        name: 'Вогняні Примари',
        totalScore: '650',
      },
      {
        name: 'Відчайдушні Відьмаки',
        totalScore: '580',
      },
    ],
  },
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
  current: 'Герої Аркад',
  tournaments,
};

export default tournamentsData;
