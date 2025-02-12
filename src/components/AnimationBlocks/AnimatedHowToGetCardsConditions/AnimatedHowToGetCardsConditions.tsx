import { FC, useRef } from 'react';
import HowToGetCardsCondition from '@MainPageComponents/HowToGetCardsCondition';
import { List, ListItem } from './AnimatedHowToGetCardsConditions.styled';
import { IProps } from './AnimatedHowToGetCardsConditions.types';
import { useInView } from 'framer-motion';

const AnimatedHowToGetCardsConditions: FC<IProps> = ({ conditions }) => {
  const listRef = useRef<HTMLUListElement>(null);
  const inView = useInView(listRef, {
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
    <List
      variants={containerVariants}
      initial='hidden'
      animate={animate}
      ref={listRef}
    >
      {conditions.map(
        (
          {
            title: {
              title,
              subtitle: { text: subtitle, fontSize: subtitleFontSize },
              position: {
                leftDesk: titleLeftDesk,
                leftMob: titleLeftMob,
                topDesk: titleTopDesk,
                topMob: titleTopMob,
              },
            },
            desc: { desc, widthMob: descWidthMob, widthDesk: descWidthDesk },
            img: {
              url: img,
              heightDesk: imgHeightDesk,
              heightMob: imgHeightMob,
              widthDesk: imgWidthDesk,
              widthMob: imgWidthMob,
            },
          },
          index
        ) => (
          <ListItem key={index} variants={elementVariants}>
            <HowToGetCardsCondition
              title={title}
              subtitle={subtitle}
              titleLeftDesk={titleLeftDesk}
              titleLeftMob={titleLeftMob}
              titleTopDesk={titleTopDesk}
              titleTopMob={titleTopMob}
              subtitleFontSize={subtitleFontSize}
              desc={desc}
              descWidthMob={descWidthMob}
              descWidthDesk={descWidthDesk}
              img={img}
              imgHeightDesk={imgHeightDesk}
              imgHeightMob={imgHeightMob}
              imgWidthDesk={imgWidthDesk}
              imgWidthMob={imgWidthMob}
            />
          </ListItem>
        )
      )}
    </List>
  );
};

export default AnimatedHowToGetCardsConditions;
