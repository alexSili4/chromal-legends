import { FC } from 'react';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import {
  ChromaLegendsImg,
  Container,
  Delimiter,
  MasterCardImg,
  SilpoImg,
} from './HeaderPartners.styled';
import masterCard from '@/images/header/master-card-min.png';
import silpo from '@/images/header/silpo-min.png';
import chromaLegends from '@/images/header/chroma-legends-min.png';

const HeaderPartners: FC = () => {
  return (
    <GeneralContainer>
      <Container>
        <MasterCardImg src={masterCard} alt='логотип MasterCard' />
        <Delimiter></Delimiter>
        <SilpoImg src={silpo} alt='логотип Сільпо' />
        <Delimiter></Delimiter>
        <ChromaLegendsImg src={chromaLegends} alt='логотип Chroma Legends' />
      </Container>
    </GeneralContainer>
  );
};

export default HeaderPartners;
