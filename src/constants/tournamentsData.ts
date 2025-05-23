import { ITournamentsData, Tournaments } from '@/types/tournaments.types';

const tournaments: Tournaments = [
  {
    title: 'Чемпіони МяуТрону',
    clans: [
      {
        name: 'Прудкі Чемпіони',
        totalScore: '8320',
      },
      {
        name: 'Бойові Ніндзя',
        totalScore: '4730',
      },
      {
        name: 'Бойові Легенди',
        totalScore: '3360',
      },
      {
        name: 'Шалені Шамани',
        totalScore: '1955',
      },
      {
        name: 'Люті Малюки',
        totalScore: '1880',
      },
      {
        name: 'Відважні Легенди',
        totalScore: '1590',
      },
      {
        name: 'Люті Картузи',
        totalScore: '1540',
      },
      {
        name: 'Вогняні Примари',
        totalScore: '1310',
      },
      {
        name: 'Жваві Захисники',
        totalScore: '1080',
      },
      {
        name: 'Незабутні Гуманоїди',
        totalScore: '1025',
      },
    ],
  },
  {
    title: 'Герої Аркад',
    clans: [
      {
        name: 'Прудкі Чемпіони',
        totalScore: '13090',
      },
      {
        name: 'Бойові Ніндзя',
        totalScore: '13075',
      },
      {
        name: 'Броньовані Бійці',
        totalScore: '5420',
      },
      {
        name: 'Незабутні Гуманоїди',
        totalScore: '4945',
      },
      {
        name: 'Вогняні Примари',
        totalScore: '1505',
      },
      {
        name: 'Міфічні Воїни',
        totalScore: '1290',
      },
      {
        name: 'Зоряні Перці',
        totalScore: '1210',
      },
      {
        name: 'Мідні Динозаври',
        totalScore: '875',
      },
      {
        name: 'Легендарні Картузи',
        totalScore: '855',
      },
      {
        name: 'Гострі Сокири',
        totalScore: '775',
      },
    ],
  },
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
  current: 'Чемпіони МяуТрону',
  tournaments,
};

export default tournamentsData;
