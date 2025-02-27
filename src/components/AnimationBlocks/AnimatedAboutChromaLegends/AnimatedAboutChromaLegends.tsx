import { FC, useRef } from 'react';
import {
  Background,
  Container,
  Content,
  Desc,
  DescWrap,
  Image,
  Text,
  TextWrap,
} from './AnimatedAboutChromaLegends.styled';
import { useInView } from 'framer-motion';
import { IProps } from './AnimatedAboutChromaLegends.types';

const AnimatedAboutChromaLegends: FC<IProps> = ({ images }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, {
    margin: '-100px 0px -400px 0px',
  });
  const animate = inView ? 'visible' : 'hidden';

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
    duration: baseDuration * Math.pow(0.8, index),
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

  const elementVariants = getElementVariants(3);

  return (
    <Container
      ref={containerRef}
      variants={containerVariants}
      initial='hidden'
      animate={animate}
    >
      <Background>
        <Content>
          <DescWrap>
            <Desc>
              Запрошуємо у світ пригод, де герої з різних вимірів використовують
              магічні фарби для мандрівок між світами, щоб зібрати всі уламки
              Магічної Призми
            </Desc>
          </DescWrap>
          {images.map(
            (
              {
                alt,
                heightDesk,
                heightMob,
                leftDesk,
                leftMob,
                src,
                topDesk,
                topMob,
                widthDesk,
                widthMob,
              },
              index
            ) => {
              const elementVariants = getElementVariants(index);

              return (
                <Image
                  key={index}
                  src={src}
                  alt={alt}
                  heightDesk={heightDesk}
                  heightMob={heightMob}
                  leftDesk={leftDesk}
                  leftMob={leftMob}
                  topDesk={topDesk}
                  topMob={topMob}
                  widthDesk={widthDesk}
                  widthMob={widthMob}
                  variants={elementVariants}
                />
              );
            }
          )}
          <TextWrap variants={elementVariants}>
            <Text>
              Приєднуйся і ти, герою, – знайомся з командами Chroma Legends та
              ставай новою Легендою!
            </Text>
          </TextWrap>
        </Content>
      </Background>
    </Container>
  );
};

export default AnimatedAboutChromaLegends;
