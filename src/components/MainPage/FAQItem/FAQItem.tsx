import { FC } from 'react';
import { IProps } from './FAQItem.types';
import { useAccordionElement } from '@/hooks';
import {
  Answer,
  AnswerWrap,
  BtnTitle,
  Button,
  Container,
} from './FAQItem.styled';
import QuestionBtnIcon from '@/icons/faq/question-btn.svg?react';

const FAQItem: FC<IProps> = ({ question, answer }) => {
  const {
    elementRef,
    elementScrollHeight,
    isShowElement,
    toggleIsShowElement,
  } = useAccordionElement();

  const onQuestionBtnClick = () => {
    toggleIsShowElement();
  };

  return (
    <Container>
      <Button type='button' onClick={onQuestionBtnClick}>
        <BtnTitle>{question}</BtnTitle>
        <QuestionBtnIcon />
      </Button>
      <AnswerWrap
        ref={elementRef}
        elementScrollHeight={elementScrollHeight}
        isShowElement={isShowElement}
      >
        <Answer>{answer}</Answer>
      </AnswerWrap>
    </Container>
  );
};

export default FAQItem;
