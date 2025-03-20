import { FC } from 'react';
import { IProps } from './SectionTitle.types';
import { Title, Subtitle } from './SectionTitle.styled';

const SectionTitle: FC<IProps> = ({
  text,
  isDark = false,
  isPrimary = false,
}) => {
  return isPrimary ? (
    <Title isDark={isDark}>{text}</Title>
  ) : (
    <Subtitle isDark={isDark}>{text}</Subtitle>
  );
};

export default SectionTitle;
