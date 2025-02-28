import { FC, useRef } from 'react';
import { IProps } from './AnimatedLeaguePrizes.types';
import LeagueSectionPrizeDetails from '@MainPageComponents/LeagueSectionPrizeDetails';
import { useInView } from 'framer-motion';
import { List, ListItem } from './AnimatedLeaguePrizes.styled';

const AnimatedLeaguePrizes: FC<IProps> = ({ leaguePrizes }) => {
  const listRef = useRef<HTMLUListElement>(null);
  const inView = useInView(listRef, {
    margin: '-100px 0px -200px 0px',
  });
  const animate = inView ? 'visible' : 'hidden';
  const leaguePrizesLength = leaguePrizes.length;

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
    <List
      variants={containerVariants}
      initial='hidden'
      animate={animate}
      ref={listRef}
    >
      {leaguePrizes.map(
        ({ name, rank, img, prize: { img: prizeImg, text } }, index) => (
          <ListItem
            key={index}
            variants={elementVariants}
            leaguePrizes={leaguePrizesLength}
          >
            <LeagueSectionPrizeDetails
              name={name}
              rank={rank}
              text={text}
              img={img}
              prizeImg={prizeImg}
            />
          </ListItem>
        )
      )}
    </List>
  );
};

export default AnimatedLeaguePrizes;
