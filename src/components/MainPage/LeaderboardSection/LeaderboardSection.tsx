import { FC, useState } from 'react';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import AnimatedHowToJoinLeaderboard from '@AnimationBlocks/AnimatedHowToJoinLeaderboard';
import LeaderboardSectionShowLeaderboardBtn from '@MainPageComponents/LeaderboardSectionShowLeaderboardBtn';
import { Container, Section, Content } from './LeaderboardSection.styled';
import SectionTitle from '@MainPageComponents/SectionTitle';
import LeaderboardModalWin from '@MainPageComponents/LeaderboardModalWin';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';

const LeaderboardSection: FC = () => {
  const [showLeaderboardModalWin, setShowLeaderboardModalWin] =
    useState<boolean>(false);

  const toggleShowLeaderboardModalWin = () => {
    setShowLeaderboardModalWin((prevState) => !prevState);
  };

  const onShowLeaderboardBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    toggleShowLeaderboardModalWin();
  };

  return (
    <>
      <Section>
        <GeneralContainer>
          <Container>
            <Content>
              <SectionTitle text='Як долучитись до турніру?' />
              <AnimatedHowToJoinLeaderboard />
            </Content>
            <LeaderboardSectionShowLeaderboardBtn
              onClick={onShowLeaderboardBtnClick}
            />
          </Container>
        </GeneralContainer>
      </Section>
      <LeaderboardModalWin
        setModalWinState={toggleShowLeaderboardModalWin}
        showModalWin={showLeaderboardModalWin}
      />
    </>
  );
};

export default LeaderboardSection;
