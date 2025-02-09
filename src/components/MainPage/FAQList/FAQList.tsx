import { FC, useState } from 'react';
import { IProps } from './FAQList.types';
import AnimatedFAQList from '@AnimationBlocks/AnimatedFAQList';
import { Button, Container, ListWrap } from './FAQList.styled';
import { makeBlur } from '@/utils';
import { BtnClickEvent } from '@/types/types';

const FAQList: FC<IProps> = ({ faq, maxItems }) => {
  const [isShowFullFist, setIsShowFullFist] = useState<boolean>(false);
  const isPartialList = faq.length > maxItems;
  const btnTitle = isShowFullFist ? 'Сховати' : 'Всі питання';

  const togglesIsShowFullFist = () => {
    setIsShowFullFist((prevState) => !prevState);
  };

  const onShowMoreBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    togglesIsShowFullFist();
  };

  return (
    <Container>
      <ListWrap>
        <AnimatedFAQList
          faq={faq}
          maxItems={maxItems}
          isShowFullFist={isShowFullFist}
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
