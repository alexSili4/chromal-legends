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
  img,
  heightDesk,
  heightMob,
  imgLeftDesk,
  imgLeftMob,
  imgTopDesk,
  imgTopMob,
  widthDesk,
  widthMob,
  name,
  desc,
  crownLeftDesk,
  crownLeftMob,
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
      <Image
        src={img}
        alt={name}
        heightDesk={heightDesk}
        heightMob={heightMob}
        leftDesk={imgLeftDesk}
        leftMob={imgLeftMob}
        topDesk={imgTopDesk}
        topMob={imgTopMob}
        widthDesk={widthDesk}
        widthMob={widthMob}
      />
    </Container>
  );
};

export default AboutSectionTargetArtifactDetails;
