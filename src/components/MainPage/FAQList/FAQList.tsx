import { FC, useEffect, useRef, useState } from 'react';
import { IProps } from './FAQList.types';
import AnimatedFAQList from '@AnimationBlocks/AnimatedFAQList';
import { Button, Container, ListWrap } from './FAQList.styled';
import { useAccordionElement } from '@/hooks';
import { makeBlur } from '@/utils';
import { BtnClickEvent, NumberOrNull } from '@/types/types';
import { theme } from '@/constants';

const FAQList: FC<IProps> = ({ faq, maxItems }) => {
  const [elementItemScrollHeight, setElementItemScrollHeight] =
    useState<NumberOrNull>(null);
  const [partialListScrollHeight, setPartialListScrollHeight] =
    useState<NumberOrNull>(null);
  const {
    elementRef,
    elementScrollHeight,
    isShowElement,
    toggleIsShowElement,
  } = useAccordionElement();
  const elementItemRef = useRef<HTMLDivElement>(null);
  const isPartialList = faq.length > maxItems;
  const listGap = theme.spacing(5);
  const btnTitle = isShowElement ? 'Сховати' : 'Всі питання';
  const elementHeight = isShowElement
    ? elementScrollHeight
    : partialListScrollHeight;
  const targetElementHeight = isPartialList
    ? elementHeight
    : elementScrollHeight;

  useEffect(() => {
    if (elementScrollHeight && elementItemScrollHeight) {
      const partialElementHeight =
        elementItemScrollHeight * maxItems + listGap * maxItems - 1;

      setPartialListScrollHeight(partialElementHeight);
    }
  }, [elementItemScrollHeight, elementScrollHeight, listGap, maxItems]);

  useEffect(() => {
    const scrollHeight = elementItemRef.current?.scrollHeight;

    if (scrollHeight) {
      setElementItemScrollHeight(scrollHeight);
    }
  }, []);

  const onShowMoreBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    toggleIsShowElement();
  };

  return (
    <Container>
      <ListWrap ref={elementRef} height={targetElementHeight}>
        <AnimatedFAQList
          faq={faq}
          listGap={listGap}
          elementItemRef={elementItemRef}
        />
      </ListWrap>
      {isPartialList && (
        <Button type='button' onClick={onShowMoreBtnClick}>
          {btnTitle}
        </Button>
      )}
    </Container>
  );
};

export default FAQList;
