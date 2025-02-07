import { FC } from 'react';
import { Container } from './HeaderVideo.styled';
import { IProps } from './HeaderVideo.types';

const HeaderVideo: FC<IProps> = ({ isHiddenOnDesk = false }) => {
  return <Container isHiddenOnDesk={isHiddenOnDesk}></Container>;
};

export default HeaderVideo;
