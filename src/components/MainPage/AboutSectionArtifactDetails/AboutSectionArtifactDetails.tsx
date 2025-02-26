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
        name={artifactName}
        crownLeftDesk={crownLeftDesk}
        crownLeftMob={crownLeftMob}
        desc={artifactDesc}
        artifacts={artifacts}
      />
    </Container>
  );
};

export default AboutSectionArtifactDetails;
