import { useInView } from 'framer-motion';
import { FC, useRef } from 'react';
import { IProps } from './AnimatedExclusiveAwardsList.types';
import {
  Container,
  List,
  ListItem,
} from './AnimatedExclusiveAwardsList.styled';
import ExclusiveAwardsSectionExclusiveAward from '@MainPageComponents/ExclusiveAwardsSectionExclusiveAward';

const AnimatedExclusiveAwardsList: FC<IProps> = ({ exclusiveAwards }) => {
  const listRef = useRef<HTMLUListElement>(null);
  const inView = useInView(listRef, {
    margin: '-200px',
  });
  const animate = inView ? 'visible' : 'hidden';
  const listLength = exclusiveAwards.length;

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
    <Container>
      <List
        variants={containerVariants}
        initial='hidden'
        animate={animate}
        ref={listRef}
      >
        {exclusiveAwards.map(
          (
            {
              award: {
                widthDesk: awardWidthDesk,
                widthMob: awardWidthMob,
                heightDesk: awardHeightDesk,
                heightMob: awardHeightMob,
                img: awardImg,
                position: {
                  xDesk: awardRightDesk,
                  xMob: awardRightMob,
                  yDesk: awardTopDesk,
                  yMob: awardTopMob,
                },
              },
              conditions: {
                text: conditionsText,
                maxWidthMob: conditionsMaxWidthMob,
                maxWidthDesk: conditionsMaxWidthDesk,
              },
              desc,
              name,
              partner: {
                widthDesk: partnerWidthDesk,
                widthMob: partnerWidthMob,
                heightDesk: partnerHeightDesk,
                heightMob: partnerHeightMob,
                img: partnerImg,
                position: {
                  xDesk: partnerRightDesk,
                  xMob: partnerRightMob,
                  yDesk: partnerTopDesk,
                  yMob: partnerTopMob,
                },
              },
            },
            index
          ) => (
            <ListItem
              variants={elementVariants}
              key={index}
              listLength={listLength}
            >
              <ExclusiveAwardsSectionExclusiveAward
                awardHeightDesk={awardHeightDesk}
                awardHeightMob={awardHeightMob}
                awardImg={awardImg}
                awardRightDesk={awardRightDesk}
                awardRightMob={awardRightMob}
                awardTopDesk={awardTopDesk}
                awardTopMob={awardTopMob}
                awardWidthDesk={awardWidthDesk}
                awardWidthMob={awardWidthMob}
                conditions={conditionsText}
                conditionsMaxWidthMob={conditionsMaxWidthMob}
                conditionsMaxWidthDesk={conditionsMaxWidthDesk}
                desc={desc}
                name={name}
                partnerHeightDesk={partnerHeightDesk}
                partnerHeightMob={partnerHeightMob}
                partnerImg={partnerImg}
                partnerWidthDesk={partnerWidthDesk}
                partnerWidthMob={partnerWidthMob}
                partnerRightDesk={partnerRightDesk}
                partnerRightMob={partnerRightMob}
                partnerTopDesk={partnerTopDesk}
                partnerTopMob={partnerTopMob}
              />
            </ListItem>
          )
        )}
      </List>
    </Container>
  );
};

export default AnimatedExclusiveAwardsList;
