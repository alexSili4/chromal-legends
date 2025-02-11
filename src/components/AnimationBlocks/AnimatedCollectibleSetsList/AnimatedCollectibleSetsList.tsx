import { FC, useRef } from 'react';
import { IProps } from './AnimatedCollectibleSetsList.types';
import CollectibleSetsListItem from '@MainPageComponents/CollectibleSetsListItem';
import {
  Container,
  List,
  ListItem,
} from './AnimatedCollectibleSetsList.styled';
import { useInView } from 'framer-motion';

const AnimatedCollectibleSetsList: FC<IProps> = ({ collectibleSets }) => {
  const listRef = useRef<HTMLUListElement>(null);
  const inView = useInView(listRef, {
    margin: '-100px 0px -200px 0px',
  });
  const animate = inView ? 'visible' : 'hidden';
  const listLength = collectibleSets.length;

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
        {collectibleSets.map(({ desc, img, name, price }, index) => (
          <ListItem
            key={index}
            variants={elementVariants}
            listLength={listLength}
          >
            <CollectibleSetsListItem
              name={name}
              desc={desc}
              price={price}
              img={img}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default AnimatedCollectibleSetsList;
