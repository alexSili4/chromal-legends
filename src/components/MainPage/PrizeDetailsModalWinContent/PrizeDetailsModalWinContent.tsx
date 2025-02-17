import { FC } from 'react';
import { IProps } from './PrizeDetailsModalWinContent.types';
import { Container, Text } from './PrizeDetailsModalWinContent.styled';

const PrizeDetailsModalWinContent: FC<IProps> = ({ text }) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};

export default PrizeDetailsModalWinContent;
