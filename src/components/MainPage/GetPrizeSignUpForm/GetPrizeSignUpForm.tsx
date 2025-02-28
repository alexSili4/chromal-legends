import { FC } from 'react';
import GetPrizeForm from '@MainPageComponents/GetPrizeForm';
import {
  Container,
  Content,
  Subtitle,
  Title,
} from './GetPrizeSignUpForm.styled';
import { IProps } from './GetPrizeSignUpForm.types';

const GetPrizeSignUpForm: FC<IProps> = ({
  error,
  updateError,
  updateIsSuccess,
}) => {
  return (
    <Container>
      <Title>
        Вітаємо!
        <br />
        Якщо твій клан увійшов у ТОП3 кращих кланів Суперліги - отримуй свій
        супер-подарунок!
      </Title>
      <Content>
        <Subtitle>Для отримання подарунку заповніть цю форму</Subtitle>
        <GetPrizeForm
          error={error}
          updateError={updateError}
          updateIsSuccess={updateIsSuccess}
        />
      </Content>
    </Container>
  );
};

export default GetPrizeSignUpForm;
