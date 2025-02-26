import { FC } from 'react';
import { Container, Link } from './HowToGetCardsSectionGoodDetails.styled';
import { IProps } from './HowToGetCardsSectionGoodDetails.types';

const HowToGetCardsSectionGoodDetails: FC<IProps> = ({ good, img }) => {
  return (
    <Link href={good} target='_blank' rel='noopener noreferrer nofollow'>
      <Container img={img}></Container>
    </Link>
  );
};

export default HowToGetCardsSectionGoodDetails;
