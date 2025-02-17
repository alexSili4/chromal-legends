import { FC } from 'react';
import { IProps } from './AnimatedPrizeDetailsModalWinContent.types';
import {
  BackdropWrap,
  Backdrop,
  CloseBtn,
  Container,
} from './AnimatedPrizeDetailsModalWinContent.styled';
import Close from '@/icons/league/close.svg?react';
import PrizeDetailsModalWinContent from '@MainPageComponents/PrizeDetailsModalWinContent';

const AnimatedPrizeDetailsModalWinContent: FC<IProps> = ({
  hideModalWin,
  setModalWinState,
  text,
}) => {
  return (
    <BackdropWrap
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <Backdrop onClick={hideModalWin}>
        <Container
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
          exit={{ opacity: 0, y: 200, transition: { duration: 0.3 } }}
        >
          <CloseBtn type='button' onClick={setModalWinState}>
            <Close />
          </CloseBtn>
          <PrizeDetailsModalWinContent text={text} />
        </Container>
      </Backdrop>
    </BackdropWrap>
  );
};

export default AnimatedPrizeDetailsModalWinContent;
