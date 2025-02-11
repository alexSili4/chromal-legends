import { FC } from 'react';
import { Subtitle } from './SectionSubtitle.styled';
import { IProps } from './SectionSubtitle.types';

const SectionSubtitle: FC<IProps> = ({ text }) => {
  return <Subtitle>{text}</Subtitle>;
};

export default SectionSubtitle;
