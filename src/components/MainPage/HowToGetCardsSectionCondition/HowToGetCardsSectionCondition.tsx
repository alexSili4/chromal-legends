import { FC } from 'react';
import { IProps } from './HowToGetCardsSectionCondition.types';
import {
  Container,
  TitleWrap,
  Text,
  Description,
  Image,
  Subtitle,
  Title,
} from './HowToGetCardsSectionCondition.styled';

const HowToGetCardsSectionCondition: FC<IProps> = ({
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
  subtitleFontSizeMob,
  subtitleFontSizeDesk,
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
          <Subtitle
            fontSizeMob={subtitleFontSizeMob}
            fontSizeDesk={subtitleFontSizeDesk}
          >
            {subtitle}
          </Subtitle>
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

export default HowToGetCardsSectionCondition;
