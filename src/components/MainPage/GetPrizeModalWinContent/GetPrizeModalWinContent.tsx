import { FC, useState } from 'react';
import { Container } from './GetPrizeModalWinContent.styled';
import GetPrizeSignUpSuccessMsg from '@MainPageComponents/GetPrizeSignUpSuccessMsg';
import { StringOrNull } from '@/types/types';
import GetPrizeSignUpForm from '@MainPageComponents/GetPrizeSignUpForm';

const GetPrizeModalWinContent: FC = () => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<StringOrNull>(null);

  const updateError = (data: StringOrNull) => {
    setError(data);
  };

  const updateIsSuccess = (data: boolean) => {
    setIsSuccess(data);
  };

  return (
    <Container isSuccess={isSuccess}>
      {isSuccess ? (
        <GetPrizeSignUpSuccessMsg />
      ) : (
        <GetPrizeSignUpForm
          updateIsSuccess={updateIsSuccess}
          updateError={updateError}
          error={error}
        />
      )}
    </Container>
  );
};

export default GetPrizeModalWinContent;
