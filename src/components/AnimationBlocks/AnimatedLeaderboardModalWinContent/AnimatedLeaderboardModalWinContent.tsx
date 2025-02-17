import { FC } from 'react';
import { IProps } from './AnimatedLeaderboardModalWinContent.types';
import LeaderboardModalWinContent from '@MainPageComponents/LeaderboardModalWinContent';
import {
  BackdropWrap,
  Backdrop,
  Container,
  CloseBtn,
} from './AnimatedLeaderboardModalWinContent.styled';
import Close from '@/icons/leaderboard/close.svg?react';

const AnimatedLeaderboardModalWinContent: FC<IProps> = ({
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
          <LeaderboardModalWinContent />
        </Container>
      </Backdrop>
    </BackdropWrap>
  );
};

export default AnimatedLeaderboardModalWinContent;
