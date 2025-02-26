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
  name,
  desc,
  crownLeftDesk,
  crownLeftMob,
  characters,
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
      {characters.map(
        ({
          name: targetName,
          img: {
            img,
            heightDesk,
            heightMob,
            leftDesk,
            leftMob,
            topDesk,
            topMob,
            widthDesk,
            widthMob,
          },
        }) => (
          <Image
            src={img}
            alt={name}
            heightDesk={heightDesk}
            heightMob={heightMob}
            leftDesk={leftDesk}
            leftMob={leftMob}
            topDesk={topDesk}
            topMob={topMob}
            widthDesk={widthDesk}
            widthMob={widthMob}
            isCurrent={name === targetName}
          />
        )
      )}
    </Container>
  );
};

export default AboutSectionTeamDetailsCharacter;
