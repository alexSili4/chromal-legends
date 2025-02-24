import { LeaguePrizes } from '@/types/leaguePrizes.types';
import firstPlace from '@/images/league/first-place.png';
import secondPlace from '@/images/league/second-place.png';
import thirdPlace from '@/images/league/third-place.png';
import otherPlace from '@/images/league/other-place.png';

const leaguePrizes: LeaguePrizes = [
  {
    rank: 1,
    name: '1 місце',
    img: firstPlace,
    text: 'що в коробці 1',
  },
  {
    rank: 2,
    name: '2 місце',
    img: secondPlace,
    text: 'що в коробці 2',
  },
  {
    rank: 3,
    name: '3 місце',
    img: thirdPlace,
    text: 'що в коробці 3',
  },
  {
    rank: null,
    name: 'Гарантовані нагороди для всіх учасників* ',
    img: otherPlace,
    text: 'що в коробці 4',
  },
];

export default leaguePrizes;
