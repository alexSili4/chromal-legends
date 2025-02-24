import { FC } from 'react';
import { IProps } from './AboutSectionTeamCharacterInfo.types';
import { NameBtn, Image, Title } from './AboutSectionTeamCharacterInfo.styled';

const AboutSectionTeamCharacterInfo: FC<IProps> = ({
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
  onClick,
}) => {
  return (
    <>
      <NameBtn
        type='button'
        onClick={onClick}
        leftDesk={nameLeftDesk}
        leftMob={nameLeftMob}
        topDesk={nameTopDesk}
        topMob={nameTopMob}
        isCurrent={isCurrent}
      >
        <Title>{name}</Title>
      </NameBtn>
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

export default AboutSectionTeamCharacterInfo;
