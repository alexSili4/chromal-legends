import { FC, useState } from 'react';
import { IProps } from './FAQList.types';
import AnimatedFAQList from '@AnimationBlocks/AnimatedFAQList';
import { BtnWrap, Button, Container, ListWrap } from './FAQList.styled';
import { makeBlur } from '@/utils';
import { BtnClickEvent } from '@/types/types';
import { useIsDesk } from '@/hooks';
import ShowMoreBtnHighlight from '@/icons/faq/show-more-btn-highlight.svg?react';

const FAQList: FC<IProps> = ({ faq, maxItems }) => {
  const [isShowFullFist, setIsShowFullFist] = useState<boolean>(false);
  const isDesk = useIsDesk();
  const isPartialList = faq.length > maxItems;
  const shouldShowShowMoreBtn = isPartialList && !isDesk;
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
          isDesk={isDesk}
        />
      </ListWrap>
      {shouldShowShowMoreBtn && (
        <BtnWrap>
          <Button type='button' onClick={onShowMoreBtnClick}>
            {btnTitle}
            <ShowMoreBtnHighlight />
          </Button>
        </BtnWrap>
      )}
    </Container>
  );
};

export default FAQList;
