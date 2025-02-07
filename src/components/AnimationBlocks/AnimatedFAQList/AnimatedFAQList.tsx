import { FC, useRef } from 'react';
import { IProps } from './AnimatedFAQList.types';
import { useInView } from 'framer-motion';
import { List, ListItem } from './AnimatedFAQList.styled';
import FAQItem from '@MainPageComponents/FAQItem';

const AnimatedFAQList: FC<IProps> = ({ faq, listGap, elementItemRef }) => {
  const listRef = useRef<HTMLUListElement>(null);
  const inView = useInView(listRef, {
    margin: '-200px',
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
      listGap={listGap}
    >
      {faq.map(({ answer, question }, index) => (
        <ListItem variants={elementVariants} key={index}>
          <FAQItem
            question={question}
            answer={answer}
            elementItemRef={elementItemRef}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default AnimatedFAQList;
