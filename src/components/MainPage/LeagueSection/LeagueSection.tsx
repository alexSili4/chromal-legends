import { SectionsIds } from '@/constants';
import { FC, useState } from 'react';
import SectionSubtitle from '@MainPageComponents/SectionSubtitle';
import SectionTitle from '@MainPageComponents/SectionTitle';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import AnimatedLeaguePrizes from '@AnimationBlocks/AnimatedLeaguePrizes';
import {
  Section,
  Container,
  ListWrap,
  TitleWrap,
  Desc,
  Content,
} from './LeagueSection.styled';
import { leaguePrizes } from '@/constants';
import Button from '@MainPageComponents/Button';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import GetPrizeModalWin from '@MainPageComponents/GetPrizeModalWin';
import { useLocation } from 'react-router-dom';

const LeagueSection: FC = () => {
  const { hash } = useLocation();
  const isSignUpLocation = hash === `#${SectionsIds.signUp}`;
  const [showGetPrizeModalWin, setShowGetPrizeModalWin] = useState<boolean>(
    () => isSignUpLocation
  );

  const toggleShowGetPrizeModalWin = () => {
    setShowGetPrizeModalWin((prevState) => !prevState);
  };

  const onShowGetPrizeBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    toggleShowGetPrizeModalWin();
  };

  return (
    <>
      <Section id={SectionsIds.league}>
        <GeneralContainer>
          <Container>
            <TitleWrap>
              <SectionTitle
                text='Суперліга «Сільпо» Chroma Legends'
                isPrimary
              />
              <SectionSubtitle
                text='Суперліга «Сільпо» Chroma Legends триває!<br/>Хоча турнір уже завершився, попереду ще більше віртуальних нагород! Виконуй щоденні завдання та отримуй круті призи.'
                maxWidth={821}
              />
            </TitleWrap>
            <Content>
              <ListWrap>
                <AnimatedLeaguePrizes leaguePrizes={leaguePrizes} />
                <Desc>
                  * Шукай більше інформації в застосунку Сhroma Legends.
                </Desc>
              </ListWrap>
              <Button
                title='Забрати приз Переможця'
                onClick={onShowGetPrizeBtnClick}
              />
            </Content>
          </Container>
        </GeneralContainer>
      </Section>
      <GetPrizeModalWin
        setModalWinState={toggleShowGetPrizeModalWin}
        showModalWin={showGetPrizeModalWin}
      />
    </>
  );
};

export default LeagueSection;
