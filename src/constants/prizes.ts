import { Prizes, IPartner } from '@/types/prizes.types';
import silpo from '@/images/prizes/silpo-min.png';
import masterCard from '@/images/prizes/master-card-min.png';
import metalMoon from '@/images/prizes/metal-moon-min.png';
import masterRoxy from '@/images/prizes/master-roxy-min.png';
import mysticChest from '@/images/prizes/mystic-chest-min.png';
import epicChest from '@/images/prizes/epic-chest-min.png';
import Symbols from './symbols';

const silpoData: IPartner = {
  img: silpo,
  widthMob: 50,
  widthDesk: 64,
  heightMob: 48,
  heightDesk: 64,
  position: { xMob: -15, yMob: -14, xDesk: -20, yDesk: -20 },
};

const masterCardData: IPartner = {
  img: masterCard,
  widthMob: 67,
  widthDesk: 67,
  heightMob: 40,
  heightDesk: 40,
  position: { xMob: -14, yMob: -20, xDesk: -19, yDesk: -20 },
};

const prizes: Prizes = [
  {
    name: 'Металевий Мун',
    desc: 'Епічний костюм',
    partner: silpoData,
    prize: {
      img: metalMoon,
      widthMob: 167,
      widthDesk: 217,
      heightMob: 159,
      heightDesk: 207,
      position: {
        xMob: -38,
        xDesk: -38,
        yMob: -8,
        yDesk: -12,
      },
    },
    conditions: {
      text: 'Подарунок у застосунку «Сільпо» за те, що «Сільпо» любить тебе ❤️',
      maxWidthMob: 213,
      maxWidthDesk: 243,
    },
  },
  {
    name: 'Майстер Роксі',
    desc: 'епічний костюм',
    partner: masterCardData,
    prize: {
      img: masterRoxy,
      widthMob: 165,
      widthDesk: 213,
      heightMob: 165,
      heightDesk: 213,
      position: { xMob: -29, xDesk: -36, yMob: -31, yDesk: -19 },
    },
    conditions: {
      text: 'Отримай за першу купівлю на суму від 99 грн з карткою Mastercard.',
      maxWidthMob: 181,
      maxWidthDesk: 243,
    },
  },
  {
    name: 'МІСТИЧНА СКРИНЯ',
    desc: 'Костюми, дроїди та картки настрою',
    partner: silpoData,
    prize: {
      img: mysticChest,
      widthMob: 172,
      widthDesk: 222,
      heightMob: 152,
      heightDesk: 185,
      position: { xMob: -16, xDesk: -20, yMob: -21, yDesk: -30 },
    },
    conditions: {
      text: `Отримай за купівлю${Symbols.newLine}3 товарів партнерів. Більше товарів партнерів – більше скринь.`,
      maxWidthMob: 228,
      maxWidthDesk: 255,
    },
  },
  {
    name: 'Епічна скриня',
    desc: 'Х2 нагорода. Епічні або легендарні дроїди у кожній скрині',
    partner: masterCardData,
    prize: {
      img: epicChest,
      widthMob: 168,
      widthDesk: 211,
      heightMob: 155,
      heightDesk: 179,
      position: { xMob: -22, xDesk: -20, yMob: -31, yDesk: -29 },
    },
    conditions: {
      text: 'Оплати від Mastercard. Сплати три покупки від 99 грн карткою Mastercard.',
      maxWidthMob: 207,
      maxWidthDesk: 243,
    },
  },
];

export default prizes;
