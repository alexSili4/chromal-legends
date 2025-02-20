import { FC } from 'react';
import { Container } from './AboutSectionArtifactDetails.styled';
import { IProps } from './AboutSectionArtifactDetails.types';
import AboutSectionArtifactDetailsDesc from '@MainPageComponents/AboutSectionArtifactDetailsDesc';
import AboutSectionTargetArtifactDetails from '@MainPageComponents/AboutSectionTargetArtifactDetails';

const AboutSectionArtifactDetails: FC<IProps> = ({
  artifactDesc,
  artifactName,
  artifacts,
  logo,
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
  widthDesk,
  widthMob,
  currentArtifactName,
  paddingBottomMob,
}) => {
  return (
    <Container paddingBottomMob={paddingBottomMob}>
      <AboutSectionArtifactDetailsDesc
        artifacts={artifacts}
        desc={artifactDesc}
        logo={logo}
        name={artifactName}
        currentArtifactName={currentArtifactName}
      />
      <AboutSectionTargetArtifactDetails
        imgTopDesk={imgTopDesk}
        imgTopMob={imgTopMob}
        name={currentArtifactName}
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

export default AboutSectionArtifactDetails;
