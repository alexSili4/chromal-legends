import { FC } from 'react';
import { BtnTitle, BtnWrap, StyledButton, Container } from './Button.styled';
import ModalWinBtnIcon from '@/icons/general/modal-win-btn.svg?react';
import { IProps } from './Button.types';

const Button: FC<IProps> = ({
  onClick,
  title,
  disabled = false,
  type = 'button',
}) => {
  return (
    <Container>
      <BtnWrap>
        <StyledButton type={type} onClick={onClick} disabled={disabled}>
          <BtnTitle>{title}</BtnTitle>
          <ModalWinBtnIcon />
        </StyledButton>
      </BtnWrap>
    </Container>
  );
};

export default Button;
