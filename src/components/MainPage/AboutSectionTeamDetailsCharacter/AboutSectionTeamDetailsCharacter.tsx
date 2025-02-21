import { FC } from 'react';
import { IProps } from './AboutSectionTeamDetailsCharacter.types';
import {
  Container,
  CrownWrap,
  Desc,
  DescWrap,
  Image,
  Name,
  NameWrap,
  Crown,
} from './AboutSectionTeamDetailsCharacter.styled';
import crown from '@/images/about/crown.png';

const AboutSectionTeamDetailsCharacter: FC<IProps> = ({
  img,
  heightDesk,
  heightMob,
  imgLeftDesk,
  imgLeftMob,
  imgTopDesk,
  imgTopMob,
  widthDesk,
  widthMob,
  name,
  desc,
  crownLeftDesk,
  crownLeftMob,
}) => {
  return (
    <Container>
      <DescWrap>
        <Desc>{desc}</Desc>
      </DescWrap>
      <NameWrap>
        <Name>{name}</Name>
        <CrownWrap leftDesk={crownLeftDesk} leftMob={crownLeftMob}>
          <Crown src={crown} alt='Декоративне зображення корони' />
        </CrownWrap>
      </NameWrap>
      <Image
        src={img}
        alt={name}
        heightDesk={heightDesk}
        heightMob={heightMob}
        leftDesk={imgLeftDesk}
        leftMob={imgLeftMob}
        topDesk={imgTopDesk}
        topMob={imgTopMob}
        widthDesk={widthDesk}
        widthMob={widthMob}
      />
    </Container>
  );
};

export default AboutSectionTeamDetailsCharacter;
