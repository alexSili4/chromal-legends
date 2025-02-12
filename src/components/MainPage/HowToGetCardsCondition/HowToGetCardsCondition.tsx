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
  titleLeftDesk,
  titleLeftMob,
  titleTopDesk,
  titleTopMob,
  subtitleFontSize,
}) => {
  return (
    <Container>
      <TitleWrap
        leftDesk={titleLeftDesk}
        leftMob={titleLeftMob}
        topDesk={titleTopDesk}
        topMob={titleTopMob}
      >
        <Text>
          <Title>{title}</Title>
          <br />
          <Subtitle fontSize={subtitleFontSize}>{subtitle}</Subtitle>
        </Text>
      </TitleWrap>
      <Image
        src={img}
        alt='декоративне зображення карток'
        heightDesk={imgHeightDesk}
        heightMob={imgHeightMob}
        widthDesk={imgWidthDesk}
        widthMob={imgWidthMob}
      />
      <Description widthMob={descWidthMob} widthDesk={descWidthDesk}>
        {desc}
      </Description>
    </Container>
  );
};

export default HowToGetCardsCondition;
