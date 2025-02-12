import { FC } from 'react';
import { IProps } from './HowToGetCardsCondition.types';
import {
  Container,
  TitleWrap,
  Text,
  Description,
  Image,
  Subtitle,
  Title,
} from './HowToGetCardsCondition.styled';

const HowToGetCardsCondition: FC<IProps> = ({
  desc,
  imgHeightDesk,
  imgHeightMob,
  img,
  subtitle,
  title,
  imgWidthDesk,
  imgWidthMob,
  descWidthDesk,
  descWidthMob,
}) => {
  return (
    <Container>
      <TitleWrap>
        <Text>
          <Title>{title}</Title>
          <br />
          <Subtitle>{subtitle}</Subtitle>
        </Text>
      </TitleWrap>
      <Image
        src={img}
        alt='декоративне зображення карток'
        imgHeightDesk={imgHeightDesk}
        imgHeightMob={imgHeightMob}
        imgWidthDesk={imgWidthDesk}
        imgWidthMob={imgWidthMob}
      />
      <Description descWidthMob={descWidthMob} descWidthDesk={descWidthDesk}>
        {desc}
      </Description>
    </Container>
  );
};

export default HowToGetCardsCondition;
