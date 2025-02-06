import { NavLinks } from '@/types/navLinks';
import SectionsIds from './sectionsIds';

const navLinks: NavLinks = [
  { title: 'Про гру', path: `#${SectionsIds.about}` },
  { title: 'Суперліга Сільпо', path: `#${SectionsIds.league}` },
  { title: 'Рейтинг', path: `#${SectionsIds.leaderboard}` },
  { title: 'Як отримати картки', path: `#${SectionsIds.cards}` },
  { title: 'Колекційні набори', path: `#${SectionsIds.sets}` },
  { title: 'Ексклюзивні нагороди', path: `#${SectionsIds.prizes}` },
  { title: 'Правила акції', path: `#${SectionsIds.rules}` },
];

export default navLinks;
