import { FC } from 'react';
import { IProps } from './SectionTitle.types';
import { Title } from './SectionTitle.styled';

const SectionTitle: FC<IProps> = ({ text, isDark = false }) => {
  return <Title isDark={isDark}>{text}</Title>;
};

export default SectionTitle;
