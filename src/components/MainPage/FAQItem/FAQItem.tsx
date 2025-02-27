import { FC } from 'react';
import { IProps } from './FAQItem.types';
import { useAccordionElement } from '@/hooks';
import {
  Answer,
  AnswerWrap,
  BtnTitle,
  Button,
  Container,
  IconWrap,
} from './FAQItem.styled';
import QuestionBtnIconClose from '@/icons/faq/question-btn-close.svg?react';
import QuestionBtnIconOpen from '@/icons/faq/question-btn-open.svg?react';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';

const FAQItem: FC<IProps> = ({ question, answer }) => {
  const {
    elementRef,
    elementScrollHeight,
    isShowElement,
    toggleIsShowElement,
  } = useAccordionElement();

  const onQuestionBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    toggleIsShowElement();
  };

  return (
    <Container>
      <Button type='button' onClick={onQuestionBtnClick}>
        <BtnTitle>{question}</BtnTitle>
        <IconWrap isShowElement={isShowElement}>
          <QuestionBtnIconClose />
          <QuestionBtnIconOpen />
        </IconWrap>
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
