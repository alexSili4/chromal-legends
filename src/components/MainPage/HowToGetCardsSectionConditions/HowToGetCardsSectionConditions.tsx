import { FC } from 'react';
import HowToGetCardsSectionConditionDetail from '@MainPageComponents/HowToGetCardsSectionConditionDetail';
import { List, ListItem } from './HowToGetCardsSectionConditions.styled';
import { IProps } from './HowToGetCardsSectionConditions.types';

const HowToGetCardsConditions: FC<IProps> = ({ conditions }) => {
  return (
    <List>
      {conditions.map(
        (
          {
            title: {
              title,
              subtitle: {
                text: subtitle,
                fontSizeMob: subtitleFontSizeMob,
                fontSizeDesk: subtitleFontSizeDesk,
              },
              position: {
                leftDesk: titleLeftDesk,
                leftMob: titleLeftMob,
                topDesk: titleTopDesk,
                topMob: titleTopMob,
              },
            },
            desc: { desc, widthMob: descWidthMob, widthDesk: descWidthDesk },
            img: {
              url: img,
              heightDesk: imgHeightDesk,
              heightMob: imgHeightMob,
              widthDesk: imgWidthDesk,
              widthMob: imgWidthMob,
            },
          },
          index
        ) => (
          <ListItem key={index}>
            <HowToGetCardsSectionConditionDetail
              title={title}
              subtitle={subtitle}
              titleLeftDesk={titleLeftDesk}
              titleLeftMob={titleLeftMob}
              titleTopDesk={titleTopDesk}
              titleTopMob={titleTopMob}
              subtitleFontSizeMob={subtitleFontSizeMob}
              subtitleFontSizeDesk={subtitleFontSizeDesk}
              desc={desc}
              descWidthMob={descWidthMob}
              descWidthDesk={descWidthDesk}
              img={img}
              imgHeightDesk={imgHeightDesk}
              imgHeightMob={imgHeightMob}
              imgWidthDesk={imgWidthDesk}
              imgWidthMob={imgWidthMob}
            />
          </ListItem>
        )
      )}
    </List>
  );
};

export default HowToGetCardsConditions;
