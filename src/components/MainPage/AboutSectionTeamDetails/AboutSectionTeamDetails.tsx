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
    img: {
      img,
      topDesk: imgTopDesk,
      topMob: imgTopMob,
      leftDesk: imgLeftDesk,
      leftMob: imgLeftMob,
      widthDesk: widthDesk,
      widthMob: widthMob,
      heightDesk: heightDesk,
      heightMob: heightMob,
    },
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
        imgTopDesk={imgTopDesk}
        imgTopMob={imgTopMob}
        name={characterName}
        widthDesk={widthDesk}
        widthMob={widthMob}
        crownLeftDesk={crownLeftDesk}
        crownLeftMob={crownLeftMob}
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
