import { FC, useState } from 'react';
import { Container } from './AboutSectionArtifactDetails.styled';
import { IProps } from './AboutSectionArtifactDetails.types';
import AboutSectionArtifactDetailsDesc from '@MainPageComponents/AboutSectionArtifactDetailsDesc';
import AboutSectionTargetArtifactDetails from '@MainPageComponents/AboutSectionTargetArtifactDetails';

const AboutSectionArtifactDetails: FC<IProps> = ({
  name,
  desc,
  logo,
  artifacts,
  preview,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const {
    crownPosition: { leftDesk: crownLeftDesk, leftMob: crownLeftMob },
    desc: artifactDesc,
    img: {
      img,
      heightDesk,
      heightMob,
      widthDesk,
      widthMob,
      leftDesk: imgLeftDesk,
      leftMob: imgLeftMob,
      topDesk: imgTopDesk,
      topMob: imgTopMob,
    },
    name: artifactName,
    paddingBottomMob,
  } = artifacts[activeIndex];

  const updateActiveIndex = (data: number) => {
    setActiveIndex(data);
  };

  return (
    <Container paddingBottomMob={paddingBottomMob}>
      <AboutSectionArtifactDetailsDesc
        preview={preview}
        desc={desc}
        logo={logo}
        name={name}
        artifactName={artifactName}
        updateActiveIndex={updateActiveIndex}
      />
      <AboutSectionTargetArtifactDetails
        imgTopDesk={imgTopDesk}
        imgTopMob={imgTopMob}
        name={artifactName}
        widthDesk={widthDesk}
        widthMob={widthMob}
        crownLeftDesk={crownLeftDesk}
        crownLeftMob={crownLeftMob}
        desc={artifactDesc}
        heightDesk={heightDesk}
        heightMob={heightMob}
        img={img}
        imgLeftDesk={imgLeftDesk}
        imgLeftMob={imgLeftMob}
      />
    </Container>
  );
};

export default AboutSectionArtifactDetails;
