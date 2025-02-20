import { AboutArtifacts, IArtifact } from '@/types/aboutArtifacts.types';
import Legendary from '@/icons/about/legendary-artifacts.svg?react';
import Speed from '@/icons/about/speed-artifacts.svg?react';
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

const legendaryArtifacts: IArtifact = {
  name: 'ЛЕГЕНДАРНІ',
  desc: 'ставай могутнішим',
  logo: Legendary,
  artifacts: [
    {
      name: {
        name: 'Плащ невидимки',
        topMob: 167,
        leftMob: 20,
        topDesk: 292,
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
        topDesk: 38,
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
};

const speedArtifacts: IArtifact = {
  name: 'Артефакти швидкості',
  desc: 'Будь першим  у всьому',
  logo: Speed,
  artifacts: [
    {
      name: {
        name: 'Оберіг бастіону',
        topMob: 10,
        leftMob: 10,
        topDesk: 18,
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
        topDesk: 294,
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
        topDesk: 231,
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
};

const aboutArtifacts: AboutArtifacts = [
  {
    name: 'Плащ<br/>невидимки',
    artifact: legendaryArtifacts,
    desc: 'Легендарний артефакт, здатний дарувати своєму власнику неймовірну силу — володар плаща може миттєво зливатися із тінню іншої людини або предмета, стаючи невидимим навіть для тих, хто знаходиться зовсім близько',
    crownPosition: {
      topMob: -5,
      leftMob: 22,
      topDesk: -6,
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
    name: 'Тотем<br/>Яструба',
    artifact: legendaryArtifacts,
    desc: 'Легендарний артефакт у формі дерев’яної маски із кори магічних блакитних дерев Фаунасферії. При активації призиває на допомогу володарю могутніх духів вітру, які сповільнюють і ускладнюють пересування ворогів',
    crownPosition: {
      topMob: -9,
      leftMob: 22,
      topDesk: -6,
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
  {
    name: 'Амулет<br/>блискавки',
    artifact: speedArtifacts,
    desc: 'Мініатюрний, розміром не більший за монету, але неймовірно потужний артефакт. Дозволяє своєму володарю опанувати мистецтво телепортації, легко долати всі перешкоди та уникати фізичних чи магічних загроз на своєму шляху',
    crownPosition: {
      topMob: -9,
      leftMob: 43,
      topDesk: -6,
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
  {
    name: 'Чоботи-<br/>скороходи',
    artifact: speedArtifacts,
    desc: 'Старовинний артефакт, здатний наділити свого власника надлюдською швидкістю та можливістю левітації',
    crownPosition: {
      topMob: -9,
      leftMob: 31,
      topDesk: -6,
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
    name: 'Оберіг<br/>бастіону',
    artifact: speedArtifacts,
    desc: 'Оберіг дозволяє миттєво знімати з союзників усі негативні ефекти — прокляття, отруту або магічне знесилення, а також знищувати джерела ворожої магії довкола. Власник артефакту відчуває значний приплив сил після кожної перемоги',
    crownPosition: {
      topMob: -9,
      leftMob: 37,
      topDesk: -6,
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
];

export default aboutArtifacts;

// name:'',
// 	desc: '',
// 	logo:,
// 	artifacts: [
// 		{
// 			name: {
// 				name: '',
// 				topMob:,
// 				leftMob:,
// 				topDesk:,
// 				leftDesk:,
// 			},
// img: {
// img:,
// topMob:,
// leftMob:,
// topDesk:,
// leftDesk:,
// widthMob:,
// heightMob:,
// widthDesk:,
// heightDesk:,
// },
// 		}
// 	]

//  {
//     name:'',
//     artifact:,
//     desc:'',
//     crownPosition: {
//       topMob:,
//       leftMob:,
//       topDesk:,
//       leftDesk:,
//         }
//     img: {
//       img:,
//       widthMob:,
//       heightMob:,
//       widthDesk:,
//       heightDesk:,
//       topMob:,
//       leftMob:,
//       topDesk:,
//       leftDesk:,
//     },
//   }
