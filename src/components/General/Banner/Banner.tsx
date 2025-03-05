import { FC } from 'react';
import { IProps } from './Banner.types';
import { Image } from './Banner.styled';

const Banner: FC<IProps> = ({ mobImg, deskImg }) => {
  return (
    <>
      <Image src={mobImg} alt='Банер' isMob />
      <Image src={deskImg} alt='Банер' isDesk />
    </>
  );
};

export default Banner;
