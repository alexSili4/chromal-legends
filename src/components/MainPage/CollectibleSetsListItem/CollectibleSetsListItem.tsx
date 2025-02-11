import { FC } from 'react';
import {
  Container,
  Desc,
  Image,
  Price,
  PriceWrap,
  PriceWrapBg,
  TextWrap,
  Title,
} from './CollectibleSetsListItem.styled';
import { IProps } from './CollectibleSetsListItem.types';

const CollectibleSetsListItem: FC<IProps> = ({ name, desc, price, img }) => {
  return (
    <Container>
      <TextWrap>
        <Title dangerouslySetInnerHTML={{ __html: name }}></Title>
        <Desc>{desc}</Desc>
      </TextWrap>
      <Image src={img} alt={name} />
      <PriceWrapBg>
        <PriceWrap>
          <Price>{price}</Price>
        </PriceWrap>
      </PriceWrapBg>
    </Container>
  );
};

export default CollectibleSetsListItem;
