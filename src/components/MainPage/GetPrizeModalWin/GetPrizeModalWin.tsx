import { FC } from 'react';
import { IProps } from './GetPrizeModalWin.types';
import AnimatedModalWin from '@AnimationBlocks/AnimatedModalWin';
import { useModalWin } from '@/hooks';
import ModalWin from '@GeneralComponents/ModalWin';
import AnimatedGetPrizeModalWinModalWinContent from '@AnimationBlocks/AnimatedGetPrizeModalWinModalWinContent';

const GetPrizeModalWin: FC<IProps> = ({ setModalWinState, showModalWin }) => {
  const { hideModalWin, modalRoot } = useModalWin({
    setModalWinState,
    showModalWin,
  });

  return (
    <AnimatedModalWin showModalWin={showModalWin}>
      <ModalWin modalRoot={modalRoot}>
        <AnimatedGetPrizeModalWinModalWinContent
          hideModalWin={hideModalWin}
          setModalWinState={setModalWinState}
        />
      </ModalWin>
    </AnimatedModalWin>
  );
};

export default GetPrizeModalWin;
