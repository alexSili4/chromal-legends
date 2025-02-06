import { FC } from 'react';
import { IProps } from './GeneralContainer.types';
import { StyledContainer } from './GeneralContainer.styled';

const GeneralContainer: FC<IProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default GeneralContainer;
