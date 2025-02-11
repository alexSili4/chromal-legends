import { FC, useRef } from 'react';
import { IProps } from './AnimatedFAQList.types';
import { useInView } from 'framer-motion';
import { List, ListItem } from './AnimatedFAQList.styled';
import FAQItem from '@MainPageComponents/FAQItem';

const AnimatedFAQList: FC<IProps> = ({
  faq,
  maxItems,
  isShowFullFist,
  isDesk,
}) => {
  const listRef = useRef<HTMLUListElement>(null);
  const inView = useInView(listRef, {
    margin: '-100px 0px -200px 0px',
  });
  const animate = inView ? 'visible' : 'hidden';

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const transition = {
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1],
  };

  const elementVariants = {
    hidden: { opacity: 0, scale: 0, transition },
    visible: { opacity: 1, scale: 1, transition },
  };

  return (
    <List
      ref={listRef}
      variants={containerVariants}
      initial='hidden'
      animate={animate}
    >
      {faq.map(({ answer, question }, index) => {
        const elementNumber = index + 1;
        const shouldHideOtherElements = elementNumber > maxItems;
        const isHiddenElement = shouldHideOtherElements && !isShowFullFist;
        const shouldHideElement = isHiddenElement && !isDesk;

        return shouldHideElement ? null : (
          <ListItem key={index} variants={elementVariants}>
            <FAQItem question={question} answer={answer} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default AnimatedFAQList;
