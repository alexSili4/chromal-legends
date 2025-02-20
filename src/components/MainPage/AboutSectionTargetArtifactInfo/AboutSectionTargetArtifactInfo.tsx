import { FC } from 'react';
import { IProps } from './AboutSectionTargetArtifactInfo.types';
import { NameWrap, Image, Name } from './AboutSectionTargetArtifactInfo.styled';

const AboutSectionTargetArtifactInfo: FC<IProps> = ({
  heightDesk,
  heightMob,
  img,
  imgLeftDesk,
  imgLeftMob,
  imgTopDesk,
  imgTopMob,
  widthDesk,
  widthMob,
  nameLeftDesk,
  nameLeftMob,
  nameTopDesk,
  nameTopMob,
  name,
  isCurrent,
}) => {
  return (
    <>
      <NameWrap
        leftDesk={nameLeftDesk}
        leftMob={nameLeftMob}
        topDesk={nameTopDesk}
        topMob={nameTopMob}
        isCurrent={isCurrent}
      >
        <Name>{name}</Name>
      </NameWrap>
      <Image
        src={img}
        alt={name}
        leftDesk={imgLeftDesk}
        leftMob={imgLeftMob}
        topDesk={imgTopDesk}
        topMob={imgTopMob}
        widthDesk={widthDesk}
        widthMob={widthMob}
        heightDesk={heightDesk}
        heightMob={heightMob}
      />
    </>
  );
};

export default AboutSectionTargetArtifactInfo;
