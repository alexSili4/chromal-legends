import { FC } from 'react';
import {
  Container,
  Desc,
  DescWrap,
  NameWrap,
  Name,
  ArtifactsWrap,
} from './AboutSectionArtifactDetailsDesc.styled';
import { IProps } from './AboutSectionArtifactDetailsDesc.types';
import AboutSectionTargetArtifactInfo from '@MainPageComponents/AboutSectionTargetArtifactInfo';

const AboutSectionArtifactDetailsDesc: FC<IProps> = ({
  desc,
  name,
  currentArtifactName,
  artifacts,
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
      <ArtifactsWrap>
        {artifacts.map(
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
              name: targetArtifactName,
            },
          }) => (
            <AboutSectionTargetArtifactInfo
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
              name={targetArtifactName}
              isCurrent={currentArtifactName === targetArtifactName}
            />
          )
        )}
      </ArtifactsWrap>
    </Container>
  );
};

export default AboutSectionArtifactDetailsDesc;
