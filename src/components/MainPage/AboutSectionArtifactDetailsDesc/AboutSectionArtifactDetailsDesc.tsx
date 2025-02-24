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
import { Symbols } from '@/constants';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';

const AboutSectionArtifactDetailsDesc: FC<IProps> = ({
  preview,
  desc,
  name,
  artifactName,
  logo: Logo,
  updateActiveIndex,
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
        {preview.map(
          (
            {
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
                name,
              },
            },
            index
          ) => {
            const isHyphen = artifactName.includes(Symbols.hyphen);
            const joinSymbol = isHyphen ? '' : Symbols.space;

            const currentArtifactNameText = artifactName
              .split(Symbols.newLine)
              .join(joinSymbol);

            const isCurrent =
              currentArtifactNameText.toLocaleLowerCase() ===
              name.toLocaleLowerCase();

            const onNameBtnClick = (e: BtnClickEvent) => {
              makeBlur(e.currentTarget);

              updateActiveIndex(index);
            };

            return (
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
                name={name}
                isCurrent={isCurrent}
                onClick={onNameBtnClick}
                key={index}
              />
            );
          }
        )}
      </ArtifactsWrap>
    </Container>
  );
};

export default AboutSectionArtifactDetailsDesc;
