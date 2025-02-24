import { FC, useState } from 'react';
import { IProps } from './LeagueSectionPrizeDetails.types';
import { BtnClickEvent } from '@/types/types';
import { getTeamPlace, makeBlur } from '@/utils';
import PrizeDetailsModalWin from '@MainPageComponents/PrizeDetailsModalWin';
import {
  Button,
  Container,
  Name,
  Rank,
  RankWrap,
  Image,
} from './LeagueSectionPrizeDetails.styled';
import FirstPlace from '@/icons/league/first-place.svg?react';
import SecondPlace from '@/icons/league/second-place.svg?react';
import ThirdPlace from '@/icons/league/third-place.svg?react';

const LeagueSectionPrizeDetails: FC<IProps> = ({ name, rank, text, img }) => {
  const [showPrizeDetailsModalWin, setShowPrizeDetailsModalWin] =
    useState<boolean>(false);
  const { isFirstPlace, isSecondPlace, isThirdPlace } = getTeamPlace(rank);
  const isPrizeInfo = rank === null;

  const toggleShowPrizeDetailsModalWin = () => {
    setShowPrizeDetailsModalWin((prevState) => !prevState);
  };

  const onShowPrizeDetailsBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    toggleShowPrizeDetailsModalWin();
  };

  return (
    <>
      <Button type='button' onClick={onShowPrizeDetailsBtnClick}>
        <Image src={img} alt='Зображення  коробки з призом'/>
        <Container isPrizeInfo={isPrizeInfo}>
          <RankWrap>
            {isFirstPlace && <FirstPlace />}
            {isSecondPlace && <SecondPlace />}
            {isThirdPlace && <ThirdPlace />}
            <Rank>{rank}</Rank>
          </RankWrap>
          <Name isPrizeInfo={isPrizeInfo}>{name}</Name>
        </Container>
      </Button>
      <PrizeDetailsModalWin
        setModalWinState={toggleShowPrizeDetailsModalWin}
        showModalWin={showPrizeDetailsModalWin}
        text={text}
      />
    </>
  );
};

export default LeagueSectionPrizeDetails;
