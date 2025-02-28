import { LeaguePrizes } from '@/types/leaguePrizes.types';
import firstPlace from '@/images/league/first-place.png';
import secondPlace from '@/images/league/second-place.png';
import thirdPlace from '@/images/league/third-place.png';
import otherPlace from '@/images/league/other-place.png';
import otherPlacePrize from '@/images/league/other-place-prize.png';
import firstPlacePrize from '@/images/league/first-place-prize.jpg';
import secondPlacePrize from '@/images/league/second-place-prize.jpg';

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
