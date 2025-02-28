import { FC } from 'react';
import { IProps } from './PrizeDetailsModalWinContent.types';
import { Container, Image, Text } from './PrizeDetailsModalWinContent.styled';

const PrizeDetailsModalWinContent: FC<IProps> = ({ text, prizeImg }) => {
  return (
    <Container>
      {text && <Text>{text}</Text>}
      <Image src={prizeImg} alt='Зображення призу' />
    </Container>
  );
};

export default PrizeDetailsModalWinContent;
