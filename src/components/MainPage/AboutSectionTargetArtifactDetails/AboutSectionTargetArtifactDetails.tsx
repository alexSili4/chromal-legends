import { FC } from 'react';
import { IProps } from './AboutSectionTargetArtifactDetails.types';
import {
  Container,
  CrownWrap,
  Desc,
  DescWrap,
  Image,
  Name,
  NameWrap,
  Crown,
} from './AboutSectionTargetArtifactDetails.styled';
import crown from '@/images/about/crown.png';

const AboutSectionTargetArtifactDetails: FC<IProps> = ({
  name,
  desc,
  crownLeftDesk,
  crownLeftMob,
  artifacts,
}) => {
  return (
    <Container>
      <DescWrap>
        <Desc>{desc}</Desc>
        <NameWrap>
          <Name dangerouslySetInnerHTML={{ __html: name }}></Name>
          <CrownWrap leftDesk={crownLeftDesk} leftMob={crownLeftMob}>
            <Crown src={crown} alt='Декоративне зображення корони' />
          </CrownWrap>
        </NameWrap>
      </DescWrap>
      {artifacts.map(
        (
          {
            name: targetName,
            img: {
              img,
              heightDesk,
              heightMob,
              widthDesk,
              widthMob,
              leftDesk,
              leftMob,
              topDesk,
              topMob,
            },
          },
          index
        ) => (
          <Image
            key={index}
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

export default AboutSectionTargetArtifactDetails;
