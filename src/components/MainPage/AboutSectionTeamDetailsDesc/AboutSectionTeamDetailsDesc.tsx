import { FC } from 'react';
import {
  Container,
  Desc,
  DescWrap,
  NameWrap,
  Name,
} from './AboutSectionTeamDetailsDesc.styled';
import { IProps } from './AboutSectionTeamDetailsDesc.types';
import AboutSectionTeamCharacterInfo from '@MainPageComponents/AboutSectionTeamCharacterInfo';

const AboutSectionTeamDetailsDesc: FC<IProps> = ({
  desc,
  name,
  characterName,
  characters,
  logo: Logo,
}) => {
  return (
    <Container>
      <NameWrap>
        <Logo />
        <Name>{name}</Name>
      </NameWrap>
      <DescWrap>
        <Desc>{desc}</Desc>
      </DescWrap>
      {characters.map(
        ({
          img: {
            heightDesk,
            heightMob,
            img,
            leftDesk: imgLeftDesk,
            leftMob: imgLeftMob,
            topDesk: imgTopDesk,
            topMob: imgTopMob,
            widthDesk,
            widthMob,
          },
          name: {
            leftDesk: nameLeftDesk,
            leftMob: nameLeftMob,
            topDesk: nameTopDesk,
            topMob: nameTopMob,
            name: targetCharacterName,
          },
        }) => (
          <AboutSectionTeamCharacterInfo
            heightDesk={heightDesk}
            heightMob={heightMob}
            img={img}
            imgLeftDesk={imgLeftDesk}
            imgLeftMob={imgLeftMob}
            imgTopDesk={imgTopDesk}
            imgTopMob={imgTopMob}
            widthDesk={widthDesk}
            widthMob={widthMob}
            nameLeftDesk={nameLeftDesk}
            nameLeftMob={nameLeftMob}
            nameTopDesk={nameTopDesk}
            nameTopMob={nameTopMob}
            name={targetCharacterName}
            isCurrent={characterName === targetCharacterName}
          />
        )
      )}
    </Container>
  );
};

export default AboutSectionTeamDetailsDesc;
