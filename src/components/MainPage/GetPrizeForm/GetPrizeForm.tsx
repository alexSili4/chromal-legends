import { IGetPrizeFormData } from '@/types/getPrize.types';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '@MainPageComponents/Button';
import {
  Container,
  InputsWrap,
  Form,
  Error,
  Content,
} from './GetPrizeForm.styled';
import Input from '@MainPageComponents/Input';
import { regExp, Symbols } from '@/constants';
import appService from '@/services/app.service';
import { IProps } from './GetPrizeForm.types';

const GetPrizeForm: FC<IProps> = ({ updateIsSuccess, updateError, error }) => {
  const { register, handleSubmit } = useForm<IGetPrizeFormData>();

  const handleFormSubmit: SubmitHandler<IGetPrizeFormData> = async (data) => {
    try {
      const response = await appService.signUpWinner(data);
      console.log(response);

      if (response.status === 422) {
        const error = response.data
          .map(({ message }) => message)
          .join(Symbols.newLine);
        updateError(error);
      } else {
        updateIsSuccess(true);
      }
    } catch (error) {}
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <Container>
        <Content>
          <InputsWrap>
            <Input
              title='Код переможця*'
              settings={{
                ...register('code', {
                  required: true,
                }),
              }}
              desc='*Шукай у застосунку Сhroma Legends, якщо твій клан увійшов у ТОП3 за результатам Турніру'
            />
            <Input
              title='ПІБ'
              settings={{
                ...register('name', {
                  required: true,
                }),
              }}
            />
            <Input
              title='Контактний номер телефону'
              settings={{
                ...register('phone', {
                  pattern: regExp.phone,
                  required: true,
                }),
              }}
            />
            <Input
              title='Призове місце'
              settings={{
                ...register('topPlacement', {
                  pattern: regExp.digitsOnly,
                  required: true,
                }),
              }}
            />
            <Input
              title='Назва клану'
              settings={{
                ...register('clan', {
                  required: true,
                }),
              }}
            />
          </InputsWrap>
          <Button title='відправити' type='submit' disabled={false} />
        </Content>
        {error && <Error dangerouslySetInnerHTML={{ __html: error }}></Error>}
      </Container>
    </Form>
  );
};

export default GetPrizeForm;
