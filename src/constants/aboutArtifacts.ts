import { AboutArtifacts } from '@/types/aboutArtifacts.types';
import Legendary from '@/icons/about/legendary-artifacts.svg?react';
import Speed from '@/icons/about/speed-artifacts.svg?react';
import Health from '@/icons/about/health.svg?react';
import Control from '@/icons/about/control.svg?react';
import invisibilityCloakPreview from '@/images/about/invisibility-cloak-preview.png';
import invisibilityCloak from '@/images/about/invisibility-cloak.png';
import hawkTotemPreview from '@/images/about/hawk-totem-preview.png';
import hawkTotem from '@/images/about/hawk-totem.png';
import bastionAmuletPreview from '@/images/about/bastion-amulet-preview.png';
import bastionAmulet from '@/images/about/bastion-amulet.png';
import swiftBootsPreview from '@/images/about/swift-boots-review.png';
import swiftBoots from '@/images/about/swift-boots.png';
import lightningAmuletPreview from '@/images/about/lightning-amulet-preview.png';
import lightningAmulet from '@/images/about/lightning-amulet.png';
import Symbols from './symbols';
import inspirationUmbrellaPreview from '@/images/about/inspiration-umbrella-preview.png';
import inspirationUmbrella from '@/images/about/inspiration-umbrella.png';
import regenerationBeaconPreview from '@/images/about/regeneration-beacon-preview.png';
import regenerationBeacon from '@/images/about/regeneration-beacon.png';
import nightFangsPreview from '@/images/about/night-fangs-preview.png';
import nightFangs from '@/images/about/night-fangs.png';
import wizardsToyPreview from '@/images/about/wizards-toy-preview.png';
import wizardsToy from '@/images/about/wizards-toy.png';
import braveryShieldPreview from '@/images/about/bravery-shield-preview.png';
import braveryShield from '@/images/about/bravery-shield.png';
import commandersRingPreview from '@/images/about/commanders-ring-preview.png';
import commandersRing from '@/images/about/commanders-ring.png';

const aboutArtifacts: AboutArtifacts = [
  {
    name: 'ЛЕГЕНДАРНІ',
    desc: 'ставай могутнішим',
    logo: Legendary,
    preview: [
      {
        name: {
          name: 'Плащ невидимки',
          topMob: 167,
          leftMob: 20,
          topDesk: 284,
          leftDesk: 20,
        },
        img: {
          img: invisibilityCloakPreview,
          topMob: 10,
          leftMob: 22,
          topDesk: 2,
          leftDesk: 38,
          widthMob: 126,
          heightMob: 165,
          widthDesk: 232,
          heightDesk: 305,
        },
      },
      {
        name: {
          name: 'Тотем Яструба',
          topMob: 10,
          leftMob: 121,
          topDesk: 30,
          leftDesk: 239,
        },
        img: {
          img: hawkTotemPreview,
          topMob: 23,
          leftMob: 152,
          topDesk: 63,
          leftDesk: 281,
          widthMob: 143,
          heightMob: 117,
          widthDesk: 248,
          heightDesk: 204,
        },
      },
    ],
    artifacts: [
      {
        name: `Плащ${Symbols.newLine}невидимки`,
        desc: 'Легендарний артефакт, здатний дарувати своєму власнику неймовірну силу — володар плаща може миттєво зливатися з тінню іншої людини або предмета, стаючи невидимим навіть для тих, хто зовсім близько.',
        crownPosition: {
          leftMob: 22,
          leftDesk: 28,
        },
        img: {
          img: invisibilityCloak,
          widthMob: 102,
          heightMob: 135,
          widthDesk: 261,
          heightDesk: 345,
          topMob: 40,
          leftMob: 15,
          topDesk: -159,
          leftDesk: 26,
        },
        paddingBottomMob: 0,
      },
      {
        name: `Тотем${Symbols.newLine}Яструба`,
        desc: 'Легендарний артефакт у формі дерев’яної маски із кори магічних блакитних дерев Фаунасферії. При активації призиває на допомогу володарю могутніх духів вітру, які сповільнюють і ускладнюють пересування ворогів',
        crownPosition: {
          leftMob: 22,
          leftDesk: 28,
        },
        img: {
          img: hawkTotem,
          widthMob: 146,
          heightMob: 126,
          widthDesk: 359,
          heightDesk: 309,
          topMob: 37,
          leftMob: 0,
          topDesk: -117,
          leftDesk: 0,
        },
        paddingBottomMob: 0,
      },
    ],
  },
  {
    name: 'Артефакти швидкості',
    desc: 'Будь першим  у всьому',
    logo: Speed,
    preview: [
      {
        name: {
          name: 'Оберіг бастіону',
          topMob: 10,
          leftMob: 10,
          topDesk: 10,
          leftDesk: 98,
        },
        img: {
          img: bastionAmuletPreview,
          topMob: 24,
          leftMob: 10,
          topDesk: 39,
          leftDesk: 94,
          widthMob: 106,
          heightMob: 109,
          widthDesk: 203,
          heightDesk: 210,
        },
      },
      {
        name: {
          name: 'Чоботи-скороходи',
          topMob: 168,
          leftMob: 52,
          topDesk: 286,
          leftDesk: 17,
        },
        img: {
          img: swiftBootsPreview,
          topMob: 66,
          leftMob: 113,
          topDesk: 104,
          leftDesk: 8,
          widthMob: 101,
          heightMob: 110,
          widthDesk: 188,
          heightDesk: 205,
        },
      },
      {
        name: {
          name: 'Амулет блискавки',
          topMob: 43,
          leftMob: 141,
          topDesk: 223,
          leftDesk: 234,
        },
        img: {
          img: lightningAmuletPreview,
          topMob: 60,
          leftMob: 212,
          topDesk: 98,
          leftDesk: 319,
          widthMob: 94,
          heightMob: 95,
          widthDesk: 147,
          heightDesk: 148,
        },
      },
    ],
    artifacts: [
      {
        name: `Оберіг${Symbols.newLine}бастіону`,
        desc: 'Оберіг дає змогу знімати із союзників усі негативні ефекти — прокляття, отруту або магічне знесилення, а також знищувати джерела ворожої магії довкола. Власник артефакту відчуває значний приплив сил після кожної перемоги.',
        crownPosition: {
          leftMob: 37,
          leftDesk: 85,
        },
        img: {
          img: bastionAmulet,
          widthMob: 132,
          heightMob: 137,
          widthDesk: 305,
          heightDesk: 316,
          topMob: 37,
          leftMob: 0,
          topDesk: -117,
          leftDesk: 5,
        },
        paddingBottomMob: 0,
      },
      {
        name: `Чоботи${Symbols.hyphen}${Symbols.newLine}скороходи`,
        desc: 'Старовинний артефакт, здатний наділити свого власника надлюдською швидкістю та можливістю левітації',
        crownPosition: {
          leftMob: 31,
          leftDesk: 71,
        },
        img: {
          img: swiftBoots,
          widthMob: 122,
          heightMob: 133,
          widthDesk: 317,
          heightDesk: 346,
          topMob: 42,
          leftMob: 13,
          topDesk: -127,
          leftDesk: 0,
        },
        paddingBottomMob: 63,
      },
      {
        name: `Амулет${Symbols.newLine}блискавки`,
        desc: 'Мініатюрний, розміром не більший за монету, але неймовірно потужний артефакт. Дозволяє своєму володарю опанувати мистецтво телепортації, легко долати всі перешкоди та уникати фізичних чи магічних загроз на своєму шляху',
        crownPosition: {
          leftMob: 43,
          leftDesk: 100,
        },
        img: {
          img: lightningAmulet,
          widthMob: 128,
          heightMob: 132,
          widthDesk: 294,
          heightDesk: 302,
          topMob: 43,
          leftMob: 21,
          topDesk: -111,
          leftDesk: 0,
        },
        paddingBottomMob: 0,
      },
    ],
  },
  {
    name: 'Артефакти здоров’я',
    desc: 'Відчуй приплив життєвої енергії',
    logo: Health,
    preview: [
      {
        name: {
          name: 'Ікла ночі',
          topMob: 10,
          leftMob: 48,
          topDesk: 11,
          leftDesk: 15,
        },
        img: {
          img: nightFangsPreview,
          topMob: 16,
          leftMob: 10,
          topDesk: 3,
          leftDesk: 144,
          widthMob: 75,
          heightMob: 79,
          widthDesk: 141,
          heightDesk: 148,
        },
      },
      {
        name: {
          name: 'Парасолька наснаги',
          topMob: 41,
          leftMob: 124,
          topDesk: 142,
          leftDesk: 215,
        },
        img: {
          img: inspirationUmbrellaPreview,
          topMob: 58,
          leftMob: 187,
          topDesk: 185,
          leftDesk: 317,
          widthMob: 118,
          heightMob: 117,
          widthDesk: 178,
          heightDesk: 176,
        },
      },
      {
        name: {
          name: 'Маяк регенерації',
          topMob: 168,
          leftMob: 10,
          topDesk: 286,
          leftDesk: 41,
        },
        img: {
          img: regenerationBeaconPreview,
          topMob: 67,
          leftMob: 53,
          topDesk: 150,
          leftDesk: 10,
          widthMob: 88,
          heightMob: 105,
          widthDesk: 166,
          heightDesk: 199,
        },
      },
    ],
    artifacts: [
      {
        name: 'Ікла Ночі',
        desc: 'Могутній артефакт, здатний переспрямовувати життєву енергію фарб, що пульсує в усіх істотах та предметах Хроміуму',
        crownPosition: {
          leftMob: 49,
          leftDesk: 112,
        },
        img: {
          img: nightFangs,
          widthMob: 127,
          heightMob: 133,
          widthDesk: 272,
          heightDesk: 284,
          topMob: 21,
          leftMob: 0,
          topDesk: -104,
          leftDesk: 24,
        },
        paddingBottomMob: 30,
      },
      {
        name: `Парасолька${Symbols.newLine}наснаги`,
        desc: 'Сила цього артефакту полягає в здатності створювати навколо себе енергетичний купол, який захищає всіх, хто знаходиться поруч. Він може поглинати магічні атаки, блокувати фізичні удари та протистояти іншим небезпечним явищам',
        crownPosition: {
          leftMob: 49,
          leftDesk: 113,
        },
        img: {
          img: inspirationUmbrella,
          widthMob: 136,
          heightMob: 134,
          widthDesk: 298,
          heightDesk: 295,
          topMob: 35,
          leftMob: 0,
          topDesk: -104,
          leftDesk: 4,
        },
        paddingBottomMob: 0,
      },
      {
        name: `Маяк${Symbols.newLine}регенерації`,
        desc: 'Рідкісний модуль системи самозбереження, розроблений для проботів-дослідників із всесвіту Хроматек. Може бути використаний будь-ким, хто приєднає модуль до свого костюма',
        crownPosition: {
          leftMob: 24,
          leftDesk: 57,
        },
        img: {
          img: regenerationBeacon,
          widthMob: 114,
          heightMob: 137,
          widthDesk: 253,
          heightDesk: 304,
          topMob: 38,
          leftMob: 17,
          topDesk: -127,
          leftDesk: 16,
        },
        paddingBottomMob: 3,
      },
    ],
  },
  {
    name: 'Артефакти контролю',
    desc: 'Створюй перешкоди своїм супротивникам',
    logo: Control,
    preview: [
      {
        name: {
          name: 'Іграшка Чарівника',
          topMob: 19,
          leftMob: 95,
          topDesk: 35,
          leftDesk: 175,
        },
        img: {
          img: wizardsToyPreview,
          topMob: 10,
          leftMob: 10,
          topDesk: 10,
          leftDesk: 42,
          widthMob: 106,
          heightMob: 125,
          widthDesk: 175,
          heightDesk: 207,
        },
      },
      {
        name: {
          name: 'Щит хоробрості',
          topMob: 54,
          leftMob: 154,
          topDesk: 127,
          leftDesk: 268,
        },
        img: {
          img: braveryShieldPreview,
          topMob: 66,
          leftMob: 203,
          topDesk: 162,
          leftDesk: 363,
          widthMob: 98,
          heightMob: 125,
          widthDesk: 150,
          heightDesk: 190,
        },
      },
      {
        name: {
          name: 'Перстень командира',
          topMob: 168,
          leftMob: 10,
          topDesk: 294,
          leftDesk: 10,
        },
        img: {
          img: commandersRingPreview,
          topMob: 69,
          leftMob: 80,
          topDesk: 147,
          leftDesk: 121,
          widthMob: 100,
          heightMob: 104,
          widthDesk: 162,
          heightDesk: 167,
        },
      },
    ],
    artifacts: [
      {
        name: `Іграшка${Symbols.newLine}Чарівника`,
        desc: 'Артефакт-хамелеон. Коли  активується, навколо нього виникає невидиме енергетичне поле, яке притягує небажаних відвідувачів, паралізує їх та робить вразливими',
        crownPosition: {
          leftMob: 36,
          leftDesk: 81,
        },
        img: {
          img: wizardsToy,
          widthMob: 112,
          heightMob: 134,
          widthDesk: 251,
          heightDesk: 298,
          topMob: 41,
          leftMob: 7,
          topDesk: -117,
          leftDesk: 3,
        },
        paddingBottomMob: 27,
      },
      {
        name: `Щит${Symbols.newLine}Хоробрості`,
        desc: "Стародавній артефакт у формі невеликого щита із сріблястими вставками, який утворює енергетичний бар'єр навколо власника. Чим більше власник Щита проявляє стійкості та відваги у бою, тим міцнішим стає захисне поле щита",
        crownPosition: {
          leftMob: 19,
          leftDesk: 47,
        },
        img: {
          img: braveryShield,
          widthMob: 104,
          heightMob: 132,
          widthDesk: 253,
          heightDesk: 320,
          topMob: 40,
          leftMob: 19,
          topDesk: -124,
          leftDesk: 20,
        },
        paddingBottomMob: 0,
      },
      {
        name: `Перстень${Symbols.newLine}командира`,
        desc: 'При активації кристал створює навколо власника потужну ауру, що знижує бойові здібності суперників, виснажує їх, та позбавляє впевненості',
        crownPosition: {
          leftMob: 47,
          leftDesk: 107,
        },
        img: {
          img: commandersRing,
          widthMob: 129,
          heightMob: 133,
          widthDesk: 295,
          heightDesk: 305,
          topMob: 38,
          leftMob: 8,
          topDesk: -121,
          leftDesk: 16,
        },
        paddingBottomMob: 47,
      },
    ],
  },
];

export default aboutArtifacts;
