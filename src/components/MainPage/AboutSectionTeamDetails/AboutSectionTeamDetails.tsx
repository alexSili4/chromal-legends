import { FC, useState } from 'react';
import { Container } from './AboutSectionTeamDetails.styled';
import { IProps } from './AboutSectionTeamDetails.types';
import AboutSectionTeamDetailsDesc from '@MainPageComponents/AboutSectionTeamDetailsDesc';
import AboutSectionTeamDetailsCharacter from '@MainPageComponents/AboutSectionTeamDetailsCharacter';

const AboutSectionTeamDetails: FC<IProps> = ({
  name,
  desc,
  characters,
  logo,
  preview,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const updateActiveIndex = (data: number) => {
    setActiveIndex(data);
  };

  const {
    crownPosition: { leftDesk: crownLeftDesk, leftMob: crownLeftMob },
    paddingBottomMob,
    desc: characterDesc,
    name: characterName,
  } = characters[activeIndex];

  return (
    <Container paddingBottomMob={paddingBottomMob}>
      <AboutSectionTeamDetailsDesc
        characters={preview}
        desc={desc}
        logo={logo}
        name={name}
        characterName={characterName}
        updateActiveIndex={updateActiveIndex}
      />
      <AboutSectionTeamDetailsCharacter
        name={characterName}
        characters={characters}
        crownLeftDesk={crownLeftDesk}
        crownLeftMob={crownLeftMob}
        desc={characterDesc}
      />
    </Container>
  );
};

export default AboutSectionTeamDetails;
