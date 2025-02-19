import { AboutTeams, ITeam } from '@/types/aboutTeams';
import Chromatek from '@/icons/about/chromatek.svg?react';
import ColorMasters from '@/icons/about/color-masters.svg?react';
import roxyPreview from '@/images/about/roxy-preview.png';
import roxy from '@/images/about/roxy.png';
import dozerPreview from '@/images/about/dozer-preview.png';
import dozer from '@/images/about/dozer.png';
import floppy from '@/images/about/floppy.png';
import floppyPreview from '@/images/about/floppy-preview.png';
import kenshi from '@/images/about/kenshi.png';
import kenshiPreview from '@/images/about/kenshi-preview.png';
import yukiPreview from '@/images/about/yuki-preview.png';
import nobuPreview from '@/images/about/nobu-preview.png';

const chromatekTeam: ITeam = {
  name: 'Корпорація Хроматек',
  desc: 'Спеціалізуються на пошуку та видобутку кристалів у нових світах, щоб отримати корисні речовини та енергію',
  logo: Chromatek,
  characters: [
    {
      img: {
        img: roxyPreview,
        widthMob: 81,
        heightMob: 98,
        widthDesk: 172,
        heightDesk: 178,
        topMob: -83,
        leftMob: 39,
        topDesk: -154,
        leftDesk: 55,
      },
      name: {
        name: 'Роксі',
        topMob: -31,
        leftMob: 0,
        topDesk: -57,
        leftDesk: 0,
      },
    },
    {
      img: {
        img: dozerPreview,
        widthDesk: 173,
        heightDesk: 243,
        widthMob: 90,
        heightMob: 131,
        topMob: -106,
        leftMob: 111,
        topDesk: -213,
        leftDesk: 177,
      },
      name: {
        name: 'дозер',
        topMob: -90,
        leftMob: 166,
        topDesk: -165,
        leftDesk: 270,
      },
    },
    {
      name: {
        name: 'Флоппі',
        topMob: -39,
        leftMob: 242,
        topDesk: -57,
        leftDesk: 389,
      },
      img: {
        img: floppyPreview,
        widthMob: 85,
        heightMob: 119,
        widthDesk: 172,
        heightDesk: 242,
        topMob: -89,
        leftMob: 177,
        topDesk: -165,
        leftDesk: 264,
      },
    },
  ],
};

const colorMastersTeam: ITeam = {
  name: 'Клан Майстрів Кольору',
  desc: 'Учні клану досліджували різні види єдиноборств і вивчали, як кольорові шматочки мозаїки могли посилити їхні навички та наділяти їхні предмети магічними здібностями',
  logo: ColorMasters,
  characters: [
    {
      img: {
        img: kenshiPreview,
        widthMob: 101,
        heightMob: 140,
        widthDesk: 168,
        heightDesk: 234,
        topMob: -105,
        leftMob: 30,
        topDesk: -185,
        leftDesk: 59,
      },
      name: {
        name: 'Кенші',
        topMob: -70,
        leftMob: 0,
        topDesk: -153,
        leftDesk: 0,
      },
    },
    {
      img: {
        img: yukiPreview,
        widthDesk: 180,
        heightDesk: 254,
        widthMob: 100,
        heightMob: 129,
        topMob: -103,
        leftMob: 100,
        topDesk: -220,
        leftDesk: 141,
      },
      name: {
        name: 'Юкі',
        topMob: -93,
        leftMob: 151,
        topDesk: -187,
        leftDesk: 235,
      },
    },
    {
      img: {
        img: nobuPreview,
        widthDesk: 167,
        heightDesk: 235,
        widthMob: 92,
        heightMob: 129,
        topMob: -94,
        leftMob: 174,
        topDesk: -182,
        leftDesk: 278,
      },
      name: {
        name: 'Нобу',
        topMob: -35,
        leftMob: 251,
        topDesk: -89,
        leftDesk: 421,
      },
    },
  ],
};

const aboutTeams: AboutTeams = [
  {
    name: 'Роксі',
    team: chromatekTeam,
    desc: 'Старший інженер команди. Вона здатна генерувати звукові хвилі, які проникаючи крізь землю, визначають нові потенційні місця видобутку ресурсів',
    img: {
      img: roxy,
      widthMob: 142,
      widthDesk: 326,
      heightMob: 151,
      heightDesk: 347,
      topMob: 24,
      leftMob: 0,
      topDesk: -312,
      leftDesk: 0,
    },
    crownPosition: {
      topMob: -12,
      leftMob: 16,
      topDesk: -20,
      leftDesk: 45,
    },
  },
  {
    name: 'дозер',
    team: chromatekTeam,
    desc: 'Велетенський робот. Був однією з перших моделей важких роботів, призначених для прокладання та укріплення підземних тунелів',
    crownPosition: {
      topMob: -12,
      leftMob: 49,
      topDesk: -20,
      leftDesk: 133,
    },
    img: {
      img: dozer,
      widthMob: 136,
      widthDesk: 313,
      heightMob: 153,
      heightDesk: 350,
      topMob: 23,
      leftMob: 7,
      topDesk: -317,
      leftDesk: 0,
    },
  },
  {
    name: 'Флоппі',
    team: chromatekTeam,
    desc: 'Невеличкий, але незамінний член команди. На його спині розташований механізм для запуску дрона-помічника',
    crownPosition: {
      topMob: -14,
      leftMob: 37,
      topDesk: -20,
      leftDesk: 105,
    },
    img: {
      img: floppy,
      widthMob: 136,
      widthDesk: 327,
      heightMob: 153,
      heightDesk: 359,
      topMob: 22,
      leftMob: 0,
      topDesk: -325,
      leftDesk: 15,
    },
  },
  {
    name: 'Кенші',
    team: colorMastersTeam,
    desc: 'З дитинства мріяв стати лідером свого клану. Він вірить, що справжня сила ніндзя полягає у направленні магії кольорів на захист та допомогу всім, хто її потребує',
    img: {
      img: kenshi,
      widthMob: 127,
      widthDesk: 298,
      heightMob: 147,
      heightDesk: 347,
      topMob: 28,
      leftMob: 4,
      topDesk: -302,
      leftDesk: 12,
    },
    crownPosition: {
      topMob: -14,
      leftMob: 14,
      topDesk: -24,
      leftDesk: 43,
    },
  },
];

export default aboutTeams;

// const ____Team: ITeam = {
//   name: '',
//   desc: '',
//   logo: ,
//   characters: [
//     {
//       img: {
//         img: ,
//         widthMob: ,
//         heightMob: ,
//         widthDesk: ,
//         heightDesk: ,
//         topMob: ,
//         leftMob:,
//         topDesk: ,
//         leftDesk:,
//       },
//       name: {
//         name: '',
//         topMob: ,
//         leftMob: ,
//         topDesk: ,
//         leftDesk: ,
//       },
//     },
//     {
//       img: {
//         img: ,
//         widthDesk:,
//         heightDesk: ,
//         widthMob: ,
//         heightMob: ,
//         topMob: ,
//         leftMob:,
//         topDesk: ,
//         leftDesk:,
//       },
//       name: {
//         name: '',
//         topMob: ,
//         leftMob:,
//         topDesk: ,
//         leftDesk:,
//       },
//     },
//   ],
// };

// {
//     name: '',
//     team: ,
//     desc: '',
//     img: {
//       img: ,
//       widthMob: ,
//       widthDesk: ,
//       heightMob: ,
//       heightDesk: ,
//       topMob: ,
//       leftMob: ,
//       topDesk: ,
//       leftDesk: ,
//     },
//     crownPosition: {
//       topMob: ,
//       leftMob:,
//       topDesk: ,
//       leftDesk: ,
//     },
//   },
