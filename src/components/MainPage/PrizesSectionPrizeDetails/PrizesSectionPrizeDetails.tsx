import { FC } from 'react';
import { IProps } from './PrizesSectionPrizeDetails.types';
import {
  Conditions,
  Container,
  AwardImg,
  Content,
  Desc,
  Name,
  PartnerImg,
  TextWrap,
} from './PrizesSectionPrizeDetails.styled';

const PrizesSectionPrizeDetails: FC<IProps> = ({
  partnerImg,
  partnerWidthMob,
  partnerWidthDesk,
  partnerHeightMob,
  partnerHeightDesk,
  partnerTopMob,
  partnerTopDesk,
  partnerRightMob,
  partnerRightDesk,
  name,
  desc,
  prizeImg,
  prizeWidthMob,
  prizeWidthDesk,
  prizeHeightMob,
  prizeHeightDesk,
  prizeTopMob,
  prizeTopDesk,
  prizeRightMob,
  prizeRightDesk,
  conditions,
  conditionsMaxWidthDesk,
  conditionsMaxWidthMob,
}) => {
  return (
    <Container>
      <Content>
        <PartnerImg
          src={partnerImg}
          alt='Логотип партнера'
          widthMob={partnerWidthMob}
          widthDesk={partnerWidthDesk}
          heightMob={partnerHeightMob}
          heightDesk={partnerHeightDesk}
          topMob={partnerTopMob}
          topDesk={partnerTopDesk}
          rightMob={partnerRightMob}
          rightDesk={partnerRightDesk}
        />
        <TextWrap>
          <Name>{name}</Name>
          <Desc>{desc}</Desc>
        </TextWrap>
        <AwardImg
          src={prizeImg}
          alt='Зображення ексклюзивної нагороди'
          widthMob={prizeWidthMob}
          widthDesk={prizeWidthDesk}
          heightMob={prizeHeightMob}
          heightDesk={prizeHeightDesk}
          topMob={prizeTopMob}
          topDesk={prizeTopDesk}
          rightMob={prizeRightMob}
          rightDesk={prizeRightDesk}
        />
      </Content>
      <Conditions
        maxWidthDesk={conditionsMaxWidthDesk}
        maxWidthMob={conditionsMaxWidthMob}
        dangerouslySetInnerHTML={{ __html: conditions }}
      ></Conditions>
    </Container>
  );
};

export default PrizesSectionPrizeDetails;
