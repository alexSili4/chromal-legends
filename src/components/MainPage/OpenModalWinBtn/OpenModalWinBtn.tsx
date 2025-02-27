import { FC } from 'react';
import { BtnTitle, BtnWrap, Button, Container } from './OpenModalWinBtn.styled';
import ModalWinBtnIcon from '@/icons/general/modal-win-btn.svg?react';
import { IProps } from './OpenModalWinBtn.types';

const OpenModalWinBtn: FC<IProps> = ({ onClick, title }) => {
  return (
    <Container>
      <BtnWrap>
        <Button type='button' onClick={onClick}>
          <BtnTitle>{title}</BtnTitle>
          <ModalWinBtnIcon />
        </Button>
      </BtnWrap>
    </Container>
  );
};

export default OpenModalWinBtn;
