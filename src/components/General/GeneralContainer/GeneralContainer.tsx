import { FC } from 'react';
import { IProps } from './GeneralContainer.types';
import { StyledContainer } from './GeneralContainer.styled';

const GeneralContainer: FC<IProps> = ({
  children,
  isHiddenOnMobile = false,
  isPositionRelative = false,
}) => {
  return (
    <StyledContainer
      isHiddenOnMobile={isHiddenOnMobile}
      isPositionRelative={isPositionRelative}
    >
      {children}
    </StyledContainer>
  );
};

export default GeneralContainer;
