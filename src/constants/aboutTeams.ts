import { AboutTeams, ITeam } from '@/types/aboutTeams.types';
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
import yuki from '@/images/about/yuki.png';
import nobu from '@/images/about/nobu.png';
import FaunasphereRebel from '@/icons/about/faunasphere-rebel.svg?react';
import marcy from '@/images/about/marcy.png';
import marcyPreview from '@/images/about/marcy-preview.png';
import mun from '@/images/about/mun.png';
import munPreview from '@/images/about/mun-preview.png';
import ralph from '@/images/about/ralph.png';
import ralphPreview from '@/images/about/ralph-preview.png';
import ChronographyInstitute from '@/icons/about/chronography-institute.svg?react';
import atlasPreview from '@/images/about/atlas-preview.png';
import novaPreview from '@/images/about/nova-preview.png';
import bergPreview from '@/images/about/berg-preview.png';
import atlas from '@/images/about/atlas.png';
import nova from '@/images/about/nova.png';
import berg from '@/images/about/berg.png';
import Legendary from '@/icons/about/legendary.svg?react';
import xandraPreview from '@/images/about/xandra-preview.png';
import neonPreview from '@/images/about/neon-preview.png';
import xandra from '@/images/about/xandra.png';
import neon from '@/images/about/neon.png';

const chromatekTeam: ITeam = {
  name: 'Корпорація Хроматек',
  desc: 'Спеціалізуються на пошуку та видобутку кристалів у нових світах, щоб отримати корисні речовини та енергію',
  logo: Chromatek,
  preview: [
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
  preview: [
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

const faunasphereRebelTeam: ITeam = {
  name: 'Бунтарі Фаунасферії',
  desc: 'Команда підлітків, що стомились від заборон і обмежень, обрала графіті магічними фарбами як спосіб вираження свого протесту та поширення власних ідей',
  logo: FaunasphereRebel,
  preview: [
    {
      img: {
        img: marcyPreview,
        widthMob: 92,
        heightMob: 129,
        widthDesk: 183,
        heightDesk: 255,
        topMob: -95,
        leftMob: 14,
        topDesk: -204,
        leftDesk: 14,
      },
      name: {
        name: 'марсі',
        topMob: -85,
        leftMob: 0,
        topDesk: -186,
        leftDesk: 0,
      },
    },
    {
      img: {
        img: munPreview,
        widthDesk: 183,
        heightDesk: 255,
        widthMob: 100,
        heightMob: 120,
        topMob: -106,
        leftMob: 94,
        topDesk: -228,
        leftDesk: 167,
      },
      name: {
        name: 'Мун',
        topMob: -97,
        leftMob: 155,
        topDesk: -202,
        leftDesk: 269,
      },
    },
    {
      img: {
        img: ralphPreview,
        widthDesk: 183,
        heightDesk: 255,
        widthMob: 71,
        heightMob: 105,
        topMob: -81,
        leftMob: 188,
        topDesk: -204,
        leftDesk: 294,
      },
      name: {
        name: 'ральф',
        topMob: -51,
        leftMob: 242,
        topDesk: -154,
        leftDesk: 399,
      },
    },
  ],
};

const chronographyInstituteTeam: ITeam = {
  name: 'інститут Хронографії',
  desc: 'Група дослідників, що спеціалізуються на вивченні унікальних мінералів і кристалів з чарівними властивостями. Шукають та вивчають стародавні камені, які містять в собі світло і силу Призми',
  logo: ChronographyInstitute,
  preview: [
    {
      img: {
        img: novaPreview,
        widthMob: 101,
        heightMob: 123,
        widthDesk: 195,
        heightDesk: 272,
        topMob: -90,
        leftMob: 33,
        topDesk: -214,
        leftDesk: 36,
      },
      name: {
        name: 'нова',
        topMob: -34,
        leftMob: 0,
        topDesk: -98,
        leftDesk: 0,
      },
    },
    {
      img: {
        img: bergPreview,
        widthDesk: 211,
        heightDesk: 253,
        widthMob: 99,
        heightMob: 138,
        topMob: -114,
        leftMob: 110,
        topDesk: -227,
        leftDesk: 147,
      },
      name: {
        name: 'берг',
        topMob: -93,
        leftMob: 87,
        topDesk: -181,
        leftDesk: 147,
      },
    },
    {
      img: {
        img: atlasPreview,
        widthDesk: 184,
        heightDesk: 257,
        widthMob: 102,
        heightMob: 119,
        topMob: -96,
        leftMob: 188,
        topDesk: -210,
        leftDesk: 307,
      },
      name: {
        name: 'атлас',
        topMob: -26,
        leftMob: 247,
        topDesk: -57,
        leftDesk: 411,
      },
    },
  ],
};

const legendaryTeam: ITeam = {
  name: 'ЛЕГЕНДАРНІ',
  desc: 'Унікальні герої всесвіту Магічних фарб, чиї історії стали справжніми легендами. Збери їх усіх у своїй колекції!',
  logo: Legendary,
  preview: [
    {
      img: {
        img: neonPreview,
        widthMob: 108,
        heightMob: 123,
        widthDesk: 217,
        heightDesk: 249,
        topMob: -107,
        leftMob: 57,
        topDesk: -223,
        leftDesk: 76,
      },
      name: {
        name: 'неон',
        topMob: -75,
        leftMob: 15,
        topDesk: -114,
        leftDesk: 0,
      },
    },
    {
      img: {
        img: xandraPreview,
        widthDesk: 233,
        heightDesk: 254,
        widthMob: 119,
        heightMob: 129,
        topMob: -105,
        leftMob: 141,
        topDesk: 218,
        leftDesk: 219,
      },
      name: {
        name: 'ксандра',
        topMob: -27,
        leftMob: 208,
        topDesk: -69,
        leftDesk: 374,
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
      leftMob: 14,
      leftDesk: 43,
    },
    paddingBottomMob: 39,
  },
  {
    name: 'дозер',
    team: chromatekTeam,
    desc: 'Велетенський робот. Був однією з перших моделей важких роботів, призначених для прокладання та укріплення підземних тунелів',
    crownPosition: {
      leftMob: 47,
      leftDesk: 131,
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
    paddingBottomMob: 45,
  },
  {
    name: 'Флоппі',
    team: chromatekTeam,
    desc: 'Невеличкий, але незамінний член команди. На його спині розташований механізм для запуску дрона-помічника',
    crownPosition: {
      leftMob: 35,
      leftDesk: 103,
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
    paddingBottomMob: 63,
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
      leftMob: 12,
      leftDesk: 41,
    },
    paddingBottomMob: 39,
  },
  {
    name: 'юкі',
    team: colorMastersTeam,
    desc: 'Народилася у невеликому селищі на околицях Таємничих Земель Єдиноборств. Її батьки були місцевими цілителям та навчили її трансформувати магічні фарби у лікувальне сяйво',
    img: {
      img: yuki,
      widthMob: 132,
      widthDesk: 318,
      heightMob: 162,
      heightDesk: 448,
      topMob: 13,
      leftMob: 3,
      topDesk: 365,
      leftDesk: 43,
    },
    crownPosition: {
      leftMob: 33,
      leftDesk: 92,
    },
    paddingBottomMob: 15,
  },
  {
    name: 'нобу',
    team: colorMastersTeam,
    desc: 'Володіє унікальним звʼязком із магічними фарбами, особливо із відтінками землі. Його основна зброя - масивна гармата, яку він називає “Хроматичний Метеор”',
    img: {
      img: nobu,
      widthMob: 128,
      widthDesk: 297,
      heightMob: 147,
      heightDesk: 342,
      topMob: 28,
      leftMob: 8,
      topDesk: -304,
      leftDesk: 13,
    },
    crownPosition: {
      leftMob: 16,
      leftDesk: 44,
    },
    paddingBottomMob: 37,
  },
  {
    name: 'мун',
    team: faunasphereRebelTeam,
    desc: 'Лідер команди бунтарів Фаунасферії. Свою славу та визнання він отримав, коли намалював мурал на найвищому хмарочосі міста - Кришталевих Баштах',
    img: {
      img: mun,
      widthMob: 138,
      widthDesk: 399,
      heightMob: 165,
      heightDesk: 435,
      topMob: 10,
      leftMob: 7,
      topDesk: -348,
      leftDesk: 0,
    },
    crownPosition: {
      leftMob: 20,
      leftDesk: 52,
    },
    paddingBottomMob: 39,
  },
  {
    name: 'марсі',
    team: faunasphereRebelTeam,
    desc: 'Не лише майстер графіті, а й віртуозна музикантка. Вона завжди носить із собою велику музичну колонку, додатково обладнану розпилювачем фарби',
    img: {
      img: marcy,
      widthMob: 147,
      widthDesk: 348,
      heightMob: 159,
      heightDesk: 376,
      topMob: 16,
      leftMob: 0,
      topDesk: -335,
      leftDesk: 0,
    },
    crownPosition: {
      leftMob: 20,
      leftDesk: 93,
    },
    paddingBottomMob: 39,
  },
  {
    name: 'ральф',
    team: faunasphereRebelTeam,
    desc: 'Майстер паркуру та чемпіон із швидкісних забігів по місту. Його унікальний пневматичний пульверизатор може змінювати властивості магічних фарб, перетворюючи малюнки на мережу порталів',
    img: {
      img: ralph,
      widthMob: 105,
      widthDesk: 268,
      heightMob: 147,
      heightDesk: 373,
      topMob: 28,
      leftMob: 14,
      topDesk: -340,
      leftDesk: 20,
    },
    crownPosition: {
      leftMob: 31,
      leftDesk: 85,
    },
    paddingBottomMob: 0,
  },
  {
    name: 'нова',
    team: chronographyInstituteTeam,
    desc: 'Майстер паркуру та чемпіон із швидкісних забігів по місту. Його унікальний пневматичний пульверизатор може змінювати властивості магічних фарб, перетворюючи малюнки на мережу порталів',
    img: {
      img: nova,
      widthMob: 114,
      widthDesk: 273,
      heightMob: 151,
      heightDesk: 364,
      topMob: 22,
      leftMob: 5,
      topDesk: -325,
      leftDesk: 0,
    },
    crownPosition: {
      leftMob: 16,
      leftDesk: 83,
    },
    paddingBottomMob: 0,
  },
  {
    name: 'берг',
    team: chronographyInstituteTeam,
    desc: 'Досвідчений археолог, який спеціалізується на консервації та захисті археологічних знахідок. У своїй роботі він використовує балон із особливим фарбувальним складом',
    img: {
      img: berg,
      widthMob: 138,
      widthDesk: 329,
      heightMob: 145,
      heightDesk: 347,
      topMob: 30,
      leftMob: 0,
      topDesk: -300,
      leftDesk: 1,
    },
    crownPosition: {
      leftMob: 16,
      leftDesk: 79,
    },
    paddingBottomMob: 27,
  },
  {
    name: 'атлас',
    team: chronographyInstituteTeam,
    desc: 'Інженер-розвідник. Має технологічну рацію, щоб завжди залишатись на звʼязку',
    img: {
      img: atlas,
      widthMob: 130,
      widthDesk: 344,
      heightMob: 145,
      heightDesk: 383,
      topMob: 30,
      leftMob: 4,
      topDesk: -325,
      leftDesk: 0,
    },
    crownPosition: {
      leftMob: 14,
      leftDesk: 122,
    },
    paddingBottomMob: 87,
  },
  {
    name: 'неон',
    team: legendaryTeam,
    desc: "Член Хроматичного Патруля - таємного ордену, метою якого є запобігти захопленню «Призма-Фокусера» та можливим катастрофам, пов'язаним із цим",
    img: {
      img: neon,
      widthMob: 134,
      widthDesk: 327,
      heightMob: 153,
      heightDesk: 376,
      topMob: 22,
      leftMob: 14,
      topDesk: -321,
      leftDesk: 6,
    },
    crownPosition: {
      leftMob: 30,
      leftDesk: 82,
    },
    paddingBottomMob: 39,
  },
  {
    name: 'ксандра',
    team: legendaryTeam,
    desc: 'Вправна найманка з майбутнього. Прибула в наш час, щоб заволодіти «Призма-Фокусером» - легендарним артефактом',
    img: {
      img: xandra,
      widthMob: 141,
      widthDesk: 349,
      heightMob: 153,
      heightDesk: 379,
      topMob: 22,
      leftMob: 0,
      topDesk: -335,
      leftDesk: 0,
    },
    crownPosition: {
      leftMob: 77,
      leftDesk: 208,
    },
    paddingBottomMob: 51,
  },
];

export default aboutTeams;

// const ____Team: ITeam = {
// name: '',
// desc: '',
// logo: ,
// characters: [
//   {
//     img: {
//       img: ,
//       widthMob: ,
//       heightMob: ,
//       widthDesk: ,
//       heightDesk: ,
//       topMob: ,
//       leftMob:,
//       topDesk: ,
//       leftDesk:,
//     },
//     name: {
//       name: '',
//       topMob: ,
//       leftMob: ,
//       topDesk: ,
//       leftDesk: ,
//     },
//   },
//   {
//     img: {
//       img: ,
//       widthDesk:,
//       heightDesk: ,
//       widthMob: ,
//       heightMob: ,
//       topMob: ,
//       leftMob:,
//       topDesk: ,
//       leftDesk:,
//     },
//     name: {
//       name: '',
//       topMob: ,
//       leftMob:,
//       topDesk: ,
//       leftDesk:,
//     },
//   },
// ],
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
