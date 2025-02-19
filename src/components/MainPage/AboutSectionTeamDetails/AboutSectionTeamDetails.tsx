import { FC } from 'react';
import { Container } from './AboutSectionTeamDetails.styled';
import AboutSectionTeamDetailsDesc from '@MainPageComponents/AboutSectionTeamDetailsDesc';
import { IProps } from './AboutSectionTeamDetails.types';
import AboutSectionTeamDetailsCharacter from '@MainPageComponents/AboutSectionTeamDetailsCharacter';

const AboutSectionTeamDetails: FC<IProps> = ({
  characters,
  teamDesc,
  logo,
  teamName,
  heightMob,
  heightDesk,
  crownTopMob,
  crownTopDesk,
  crownLeftMob,
  crownLeftDesk,
  characterDesc,
  imgLeftDesk,
  imgLeftMob,
  img,
  imgTopDesk,
  imgTopMob,
  characterName,
  widthDesk,
  widthMob,
}) => {
  return (
    <Container>
      <AboutSectionTeamDetailsDesc
        characters={characters}
        desc={teamDesc}
        logo={logo}
        name={teamName}
        characterName={characterName}
      />
      <AboutSectionTeamDetailsCharacter
        imgTopDesk={imgTopDesk}
        imgTopMob={imgTopMob}
        name={characterName}
        widthDesk={widthDesk}
        widthMob={widthMob}
        crownLeftDesk={crownLeftDesk}
        crownLeftMob={crownLeftMob}
        crownTopDesk={crownTopDesk}
        crownTopMob={crownTopMob}
        desc={characterDesc}
        heightDesk={heightDesk}
        heightMob={heightMob}
        img={img}
        imgLeftDesk={imgLeftDesk}
        imgLeftMob={imgLeftMob}
      />
    </Container>
  );
};

export default AboutSectionTeamDetails;
