import { FC, useRef } from 'react';
import stepPath1Mob from '@/icons/leaderboard/step-path-1-mob.svg';
import stepPath2Mob from '@/icons/leaderboard/step-path-2-mob.svg';
import stepPath3Mob from '@/icons/leaderboard/step-path-3-mob.svg';
import stepPath4Mob from '@/icons/leaderboard/step-path-4-mob.svg';
import stepPath1Desk from '@/icons/leaderboard/step-path-1-desk.svg';
import stepPath2Desk from '@/icons/leaderboard/step-path-2-desk.svg';
import stepPath3Desk from '@/icons/leaderboard/step-path-3-desk.svg';
import stepPath4Desk from '@/icons/leaderboard/step-path-4-desk.svg';
import LeaderboardSectionStepDetails from '@MainPageComponents/LeaderboardSectionStepDetails';
import { Container, Image, Item } from './AnimatedHowToJoinLeaderboard.styled';
import { useInView } from 'framer-motion';
import step1 from '@/images/leaderboard/step-1.png';
import step2 from '@/images/leaderboard/step-2.png';
import step3 from '@/images/leaderboard/step-3.png';
import step4 from '@/images/leaderboard/step-4.png';
import step5 from '@/images/leaderboard/step-5.png';

const AnimatedHowToJoinLeaderboard: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, {
    margin: '-100px 0px -200px 0px',
  });
  const animate = inView ? 'visible' : 'hidden';

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 1,
      },
    },
  };

  const transition = {
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1],
  };

  const elementVariants = {
    hidden: { y: 50, opacity: 0, transition },
    visible: {
      y: 0,
      opacity: 1,
      transition,
    },
  };

  return (
    <Container
      variants={containerVariants}
      initial='hidden'
      animate={animate}
      ref={containerRef}
    >
      <Item
        variants={elementVariants}
        topMob={0}
        leftMob={41}
        topDesk={6}
        leftDesk={83}
      >
        <LeaderboardSectionStepDetails
          img={step1}
          imgWidthMob={100}
          imgHeightMob={102}
          imgWidthDesk={139}
          imgHeightDesk={142}
          title='Завантажуй гру
Chroma Legends'
          number='1'
          titleMaxWidthMob={132}
          titleMaxWidthDesk={189}
        />
      </Item>
      <Item
        variants={elementVariants}
        topMob={117}
        leftMob={17}
        topDesk={183}
        leftDesk={0}
      >
        <Image
          src={stepPath1Mob}
          alt='Декоративне зображення частини шляху'
          hiddenOnDesk
        />
        <Image
          src={stepPath1Desk}
          alt='Декоративне зображення частини шляху'
          hiddenOnMob
        />
      </Item>
      <Item
        variants={elementVariants}
        topMob={188}
        leftMob={84}
        topDesk={247}
        leftDesk={215}
      >
        <LeaderboardSectionStepDetails
          img={step2}
          imgWidthMob={156}
          imgHeightMob={110}
          imgWidthDesk={200}
          imgHeightDesk={142}
          title='Збирай картки за покупки у Сільпо та виконуй завдання у грі'
          number='2'
          titleMaxWidthMob={211}
          titleMaxWidthDesk={367}
        />
      </Item>
      <Item
        variants={elementVariants}
        topMob={282}
        leftMob={-9}
        topDesk={165}
        leftDesk={427}
      >
        <Image
          src={stepPath2Mob}
          alt='Декоративне зображення частини шляху'
          hiddenOnDesk
        />
        <Image
          src={stepPath2Desk}
          alt='Декоративне зображення частини шляху'
          hiddenOnMob
        />
      </Item>
      <Item
        variants={elementVariants}
        topMob={400}
        leftMob={41}
        topDesk={0}
        leftDesk={478}
      >
        <LeaderboardSectionStepDetails
          img={step3}
          imgWidthMob={75}
          imgHeightMob={103}
          imgWidthDesk={108}
          imgHeightDesk={148}
          title='Долучайся до існуючого клану або створи власний '
          number='3'
          titleMaxWidthMob={202}
          titleMaxWidthDesk={305}
        />
      </Item>
      <Item
        variants={elementVariants}
        topMob={540}
        leftMob={49}
        topDesk={196}
        leftDesk={731}
      >
        <Image
          src={stepPath3Mob}
          alt='Декоративне зображення частини шляху'
          hiddenOnDesk
        />
        <Image
          src={stepPath3Desk}
          alt='Декоративне зображення частини шляху'
          hiddenOnMob
        />
      </Item>
      <Item
        variants={elementVariants}
        topMob={613}
        leftMob={154}
        topDesk={255}
        leftDesk={796}
      >
        <LeaderboardSectionStepDetails
          img={step4}
          imgWidthMob={100}
          imgHeightMob={100}
          imgWidthDesk={139}
          imgHeightDesk={139}
          title='Запрошуй
друзів'
          number='4'
          titleMaxWidthMob={101}
          titleMaxWidthDesk={143}
        />
      </Item>
      <Item
        variants={elementVariants}
        topMob={743}
        leftMob={13}
        topDesk={189}
        leftDesk={895}
      >
        <Image
          src={stepPath4Mob}
          alt='Декоративне зображення частини шляху'
          hiddenOnDesk
        />
        <Image
          src={stepPath4Desk}
          alt='Декоративне зображення частини шляху'
          hiddenOnMob
        />
      </Item>
      <Item
        variants={elementVariants}
        topMob={812}
        leftMob={41}
        topDesk={24}
        leftDesk={942}
      >
        <LeaderboardSectionStepDetails
          img={step5}
          imgWidthMob={128}
          imgHeightMob={100}
          imgWidthDesk={173}
          imgHeightDesk={135}
          title='Піднімайся у рейтингу та отримуй подарунки'
          number='5'
          titleMaxWidthMob={174}
          titleMaxWidthDesk={288}
        />
      </Item>
    </Container>
  );
};

export default AnimatedHowToJoinLeaderboard;
