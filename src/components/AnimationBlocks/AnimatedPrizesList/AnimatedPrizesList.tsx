import { useInView } from 'framer-motion';
import { FC, useRef } from 'react';
import { IProps } from './AnimatedPrizesList.types';
import { Container, List, ListItem } from './AnimatedPrizesList.styled';
import PrizesSectionPrizeDetails from '@MainPageComponents/PrizesSectionPrizeDetails';

const AnimatedPrizesList: FC<IProps> = ({ prizes }) => {
  const listRef = useRef<HTMLUListElement>(null);
  const inView = useInView(listRef, {
    margin: '-50px 0px -200px 0px',
  });
  const animate = inView ? 'visible' : 'hidden';
  const listLength = prizes.length;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const baseDuration = 0.6;

  const getTransition = (index: number) => ({
    duration: baseDuration * Math.pow(0.65, index),
    ease: [0.25, 0.1, 0.25, 1],
  });

  const getElementVariants = (index: number) => ({
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: getTransition(index),
    },
  });

  return (
    <Container>
      <List
        variants={containerVariants}
        initial='hidden'
        animate={animate}
        ref={listRef}
      >
        {prizes.map(
          (
            {
              prize: {
                widthDesk: prizeWidthDesk,
                widthMob: prizeWidthMob,
                heightDesk: prizeHeightDesk,
                heightMob: prizeHeightMob,
                img: prizeImg,
                position: {
                  xDesk: prizeRightDesk,
                  xMob: prizeRightMob,
                  yDesk: prizeTopDesk,
                  yMob: prizeTopMob,
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
              variants={getElementVariants(index)}
              key={index}
              listLength={listLength}
            >
              <PrizesSectionPrizeDetails
                prizeHeightDesk={prizeHeightDesk}
                prizeHeightMob={prizeHeightMob}
                prizeImg={prizeImg}
                prizeRightDesk={prizeRightDesk}
                prizeRightMob={prizeRightMob}
                prizeTopDesk={prizeTopDesk}
                prizeTopMob={prizeTopMob}
                prizeWidthDesk={prizeWidthDesk}
                prizeWidthMob={prizeWidthMob}
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

export default AnimatedPrizesList;
