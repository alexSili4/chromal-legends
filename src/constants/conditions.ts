import { Conditions } from '@/types/conditions.types';
import purchaseBonus from '@/images/conditions/purchase-bonus.png';
import productBonus from '@/images/conditions/product-bonus.png';
import cardPaymentBonus from '@/images/conditions/card-payment-bonus.png';

const conditions: Conditions = [
  {
    title: {
      title: '99',
      subtitle: { text: 'грн', fontSize: 36 },
      position: { leftMob: 24, topMob: 0, leftDesk: 35, topDesk: -3 },
    },
    desc: {
      desc: 'За кожні 99 грн в чеку купуйте 1 картку за акційною ціною 2,99 грн',
      widthMob: 285,
      widthDesk: 313,
    },
    img: {
      url: purchaseBonus,
      widthMob: 285,
      widthDesk: 332,
      heightMob: 236,
      heightDesk: 294,
    },
  },
  {
    title: {
      title: '+1',
      subtitle: { text: 'картка', fontSize: 16 },
      position: {
        leftDesk: 65,
        leftMob: 24,
        topDesk: 0,
        topMob: -2,
      },
    },
    desc: {
      desc: 'За кожен товар партнера купуйте 1 додаткову картку за акційною ціною 2,99 грн',
      widthMob: 315,
      widthDesk: 350,
    },
    img: {
      url: productBonus,
      widthMob: 255,
      widthDesk: 291,
      heightMob: 256,
      heightDesk: 315,
    },
  },
  {
    title: {
      title: '+2',
      subtitle: { text: 'картки', fontSize: 16 },
      position: { leftDesk: 44, leftMob: 24, topDesk: 1, topMob: 3 },
    },
    desc: {
      desc: 'За оплату карткою Mastercard купуйте 2 додаткові картки за акційною ціною 2,99 грн. кожна',
      widthMob: 310,
      widthDesk: 394,
    },
    img: {
      url: cardPaymentBonus,
      widthMob: 314,
      widthDesk: 400,
      heightMob: 236,
      heightDesk: 298,
    },
  },
];

export default conditions;
