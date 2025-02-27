import { FC } from 'react';
import { IProps } from './AnimatedGetPrizeModalWinModalWinContent.types';
import GetPrizeModalWinContent from '@MainPageComponents/GetPrizeModalWinContent';
import {
  BackdropWrap,
  Backdrop,
  Container,
  CloseBtn,
} from './AnimatedGetPrizeModalWinModalWinContent.styled';
import Close from '@/icons/general/close.svg?react';

const AnimatedGetPrizeModalWinModalWinContent: FC<IProps> = ({
  hideModalWin,
  setModalWinState,
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
          <GetPrizeModalWinContent />
        </Container>
      </Backdrop>
    </BackdropWrap>
  );
};

export default AnimatedGetPrizeModalWinModalWinContent;
