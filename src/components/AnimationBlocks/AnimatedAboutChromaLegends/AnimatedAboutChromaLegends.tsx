import { FC, useRef } from 'react';
import phone from '@/images/about/phone.png';
import ray from '@/images/about/ray.png';
import hero from '@/images/about/hero.png';
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

const AnimatedAboutChromaLegends: FC = () => {
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
          <Image
            src={phone}
            alt='Декоративне зображення телефона'
            topMob={328}
            leftMob={87}
            topDesk={95}
            leftDesk={713}
            widthMob={219}
            heightMob={143}
            widthDesk={524}
            heightDesk={341}
            variants={elementVariants}
          />
          <Image
            src={ray}
            alt='Декоративне зображення променя'
            topMob={248}
            leftMob={-9}
            topDesk={-96}
            leftDesk={484}
            widthMob={267}
            heightMob={182}
            widthDesk={639}
            heightDesk={434}
            variants={elementVariants}
          />
          <Image
            src={hero}
            alt='Декоративне зображення героя'
            topMob={276}
            leftMob={-9}
            topDesk={-30}
            leftDesk={484}
            widthMob={198}
            heightMob={236}
            widthDesk={474}
            heightDesk={563}
            variants={elementVariants}
          />
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
