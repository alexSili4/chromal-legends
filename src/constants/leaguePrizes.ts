import { LeaguePrizes } from '@/types/leaguePrizes.types';
import firstPlace from '@/images/league/first-place-min.png';
import secondPlace from '@/images/league/second-place-min.png';
import thirdPlace from '@/images/league/third-place-min.png';
import otherPlace from '@/images/league/other-place-min.png';
import otherPlacePrize from '@/images/league/other-place-prize-min.png';
import firstPlacePrize from '@/images/league/first-place-prize-min.png';
import secondPlacePrize from '@/images/league/second-place-prize-min.png';

const leaguePrizes: LeaguePrizes = [
  {
    rank: 1,
    name: '1 місце',
    img: firstPlace,
    prize: { img: firstPlacePrize },
  },
  {
    rank: 2,
    name: '2 місце',
    img: secondPlace,
    prize: { img: secondPlacePrize },
  },
  {
    rank: 3,
    name: '3 місце',
    img: thirdPlace,
    prize: { img: secondPlacePrize },
  },
  {
    rank: null,
    name: 'Гарантовані нагороди для всіх учасників* ',
    img: otherPlace,
    prize: {
      img: otherPlacePrize,
      text: 'Виконуй турнірні завдання та отримуй нові нагороди кожні 2 тижні',
    },
  },
];

export default leaguePrizes;
