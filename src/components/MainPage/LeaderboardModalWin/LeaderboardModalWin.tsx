import { FC } from 'react';
import { IProps } from './LeaderboardModalWin.types';
import AnimatedModalWin from '@AnimationBlocks/AnimatedModalWin';
import { useModalWin } from '@/hooks';
import ModalWin from '@GeneralComponents/ModalWin';
import AnimatedLeaderboardModalWinContent from '@AnimationBlocks/AnimatedLeaderboardModalWinContent';

const LeaderboardModalWin: FC<IProps> = ({
  setModalWinState,
  showModalWin,
}) => {
  const { hideModalWin, modalRoot } = useModalWin({
    setModalWinState,
    showModalWin,
  });

  return (
    <AnimatedModalWin showModalWin={showModalWin}>
      <ModalWin modalRoot={modalRoot}>
        <AnimatedLeaderboardModalWinContent
          hideModalWin={hideModalWin}
          setModalWinState={setModalWinState}
        />
      </ModalWin>
    </AnimatedModalWin>
  );
};

export default LeaderboardModalWin;
