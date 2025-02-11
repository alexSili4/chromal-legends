import { FC } from 'react';
import { IProps } from './ExclusiveAwardsSectionExclusiveAward.types';
import {
  Conditions,
  Container,
  AwardImg,
  Content,
  Desc,
  Name,
  PartnerImg,
  TextWrap,
} from './ExclusiveAwardsSectionExclusiveAward.styled';

const ExclusiveAwardsSectionExclusiveAward: FC<IProps> = ({
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
  awardImg,
  awardWidthMob,
  awardWidthDesk,
  awardHeightMob,
  awardHeightDesk,
  awardTopMob,
  awardTopDesk,
  awardRightMob,
  awardRightDesk,
  conditions,
  conditionsMaxWidthDesk,
  conditionsMaxWidthMob,
}) => {
  return (
    <Container>
      <Content >
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
          src={awardImg}
          alt='Зображення ексклюзивної нагороди'
          widthMob={awardWidthMob}
          widthDesk={awardWidthDesk}
          heightMob={awardHeightMob}
          heightDesk={awardHeightDesk}
          topMob={awardTopMob}
          topDesk={awardTopDesk}
          rightMob={awardRightMob}
          rightDesk={awardRightDesk}
        />
      </Content>
      <Conditions
        maxWidthDesk={conditionsMaxWidthDesk}
        maxWidthMob={conditionsMaxWidthMob}
      >
        {conditions}
      </Conditions>
    </Container>
  );
};

export default ExclusiveAwardsSectionExclusiveAward;
