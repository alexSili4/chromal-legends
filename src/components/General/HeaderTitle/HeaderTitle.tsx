import { FC } from 'react';
import { Container, Subtitle, Title } from './HeaderTitle.styled';
import GeneralContainer from '@GeneralComponents/GeneralContainer';

const HeaderTitle: FC = () => {
  return (
    <GeneralContainer>
      <Container>
        <Title>Ти - Легенда Суперліги</Title>
        <Subtitle>
          Колекціонуй картки, збирай клан
          <br />
          друзів та перемагай у турнірі
        </Subtitle>
      </Container>
    </GeneralContainer>
  );
};

export default HeaderTitle;
