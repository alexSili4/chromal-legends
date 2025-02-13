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
        staggerChildren: 0.2,
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
        <LeaderboardSectionStepDetails />
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
        topMob={324}
        leftMob={24}
        topDesk={247}
        leftDesk={215}
      >
        <LeaderboardSectionStepDetails />
      </Item>
      <Item
        variants={elementVariants}
        topMob={418}
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
        topMob={536}
        leftMob={41}
        topDesk={0}
        leftDesk={478}
      >
        <LeaderboardSectionStepDetails />
      </Item>
      <Item
        variants={elementVariants}
        topMob={677}
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
        topMob={749}
        leftMob={154}
        topDesk={255}
        leftDesk={796}
      >
        <LeaderboardSectionStepDetails />
      </Item>
      <Item
        variants={elementVariants}
        topMob={879}
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
        topMob={948}
        leftMob={41}
        topDesk={24}
        leftDesk={942}
      >
        <LeaderboardSectionStepDetails />
      </Item>
    </Container>
  );
};

export default AnimatedHowToJoinLeaderboard;
