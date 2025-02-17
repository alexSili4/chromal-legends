import { FC } from 'react';
import { IProps } from './PrizeDetailsModalWin.types';
import { useModalWin } from '@/hooks';
import ModalWin from '@GeneralComponents/ModalWin';
import AnimatedModalWin from '@AnimationBlocks/AnimatedModalWin';
import AnimatedPrizeDetailsModalWinContent from '@AnimationBlocks/AnimatedPrizeDetailsModalWinContent';

const PrizeDetailsModalWin: FC<IProps> = ({
  setModalWinState,
  showModalWin,
  text,
}) => {
  const { hideModalWin, modalRoot } = useModalWin({
    setModalWinState,
    showModalWin,
  });

  return (
    <AnimatedModalWin showModalWin={showModalWin}>
      <ModalWin modalRoot={modalRoot}>
        <AnimatedPrizeDetailsModalWinContent
          hideModalWin={hideModalWin}
          setModalWinState={setModalWinState}
          text={text}
        />
      </ModalWin>
    </AnimatedModalWin>
  );
};

export default PrizeDetailsModalWin;
