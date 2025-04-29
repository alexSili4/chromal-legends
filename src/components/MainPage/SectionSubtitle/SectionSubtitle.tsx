import { FC } from 'react';
import { Subtitle } from './SectionSubtitle.styled';
import { IProps } from './SectionSubtitle.types';

const SectionSubtitle: FC<IProps> = ({ text, maxWidth }) => {
  return (
    <Subtitle
      maxWidth={maxWidth}
      dangerouslySetInnerHTML={{ __html: text }}
    ></Subtitle>
  );
};

export default SectionSubtitle;
