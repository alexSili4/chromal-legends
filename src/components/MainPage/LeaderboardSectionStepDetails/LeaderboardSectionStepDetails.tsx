import { FC } from 'react';
import { IProps } from './LeaderboardSectionStepDetails.types';
import {
  Container,
  Image,
  Number,
  Title,
  TitleWrap,
} from './LeaderboardSectionStepDetails.styled';

const LeaderboardSectionStepDetails: FC<IProps> = ({
  img,
  imgWidthMob,
  imgHeightMob,
  imgWidthDesk,
  imgHeightDesk,
  number,
  title,
  titleMaxWidthDesk,
  titleMaxWidthMob,
}) => {
  return (
    <Container>
      <Image
        src={img}
        alt='Декоративне зображення умови як долучитись до турніру'
        widthMob={imgWidthMob}
        heightMob={imgHeightMob}
        widthDesk={imgWidthDesk}
        heightDesk={imgHeightDesk}
      />
      <TitleWrap
        maxWidthDesk={titleMaxWidthDesk}
        maxWidthMob={titleMaxWidthMob}
      >
        <Number>{number}</Number>
        <Title>{title}</Title>
      </TitleWrap>
    </Container>
  );
};

export default LeaderboardSectionStepDetails;
