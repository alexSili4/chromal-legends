import { AboutChromaLegendsImgs } from '@/types/aboutChromaLegendsImgs.types';
import phone from '@/images/about/phone-min.png';
import ray from '@/images/about/ray-min.png';
import hero from '@/images/about/hero-min.png';

const aboutChromaLegendsImgs: AboutChromaLegendsImgs = [
  {
    src: phone,
    alt: 'Декоративне зображення телефона',
    topMob: 328,
    leftMob: 87,
    topDesk: 95,
    leftDesk: 713,
    widthMob: 219,
    heightMob: 143,
    widthDesk: 524,
    heightDesk: 341,
  },
  {
    src: ray,
    alt: 'Декоративне зображення променя',
    topMob: 248,
    leftMob: -9,
    topDesk: -96,
    leftDesk: 484,
    widthMob: 267,
    heightMob: 182,
    widthDesk: 639,
    heightDesk: 434,
  },
  {
    src: hero,
    alt: 'Декоративне зображення героя',
    topMob: 276,
    leftMob: -9,
    topDesk: -30,
    leftDesk: 484,
    widthMob: 198,
    heightMob: 236,
    widthDesk: 474,
    heightDesk: 563,
  },
];

export default aboutChromaLegendsImgs;
