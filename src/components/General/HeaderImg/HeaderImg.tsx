import { FC } from 'react';
import image from '@/images/header/video-bg-min.png';
import { Image } from './HeaderImg.styled';

const HeaderImg: FC = () => {
  return <Image src={image} alt='Зображення програвача' />;
};

export default HeaderImg;
