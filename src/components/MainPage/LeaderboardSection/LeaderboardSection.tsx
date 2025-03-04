import { FC, useEffect, useState } from 'react';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import AnimatedHowToJoinLeaderboard from '@AnimationBlocks/AnimatedHowToJoinLeaderboard';
import Button from '@MainPageComponents/Button';
import {
  Container,
  Section,
  Content,
  Background,
} from './LeaderboardSection.styled';
import SectionTitle from '@MainPageComponents/SectionTitle';
import LeaderboardModalWin from '@MainPageComponents/LeaderboardModalWin';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { SectionsIds } from '@/constants';
import { useLocation, useNavigate } from 'react-router-dom';
import { IProps } from './LeaderboardSection.types';

const LeaderboardSection: FC<IProps> = ({ clans }) => {
  const { hash, pathname } = useLocation();
  const navigate = useNavigate();
  const isRatingLocation = hash === `#${SectionsIds.rating}`;
  const [showLeaderboardModalWin, setShowLeaderboardModalWin] =
    useState<boolean>(false);

  useEffect(() => {
    if (isRatingLocation) {
      setShowLeaderboardModalWin(isRatingLocation);
      navigate(pathname);
    }
  }, [isRatingLocation, navigate, pathname]);

  const toggleShowLeaderboardModalWin = () => {
    setShowLeaderboardModalWin((prevState) => !prevState);
  };

  const onShowLeaderboardBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    toggleShowLeaderboardModalWin();
  };

  return (
    <>
      <Section id={SectionsIds.leaderboard}>
        <Background>
          <GeneralContainer>
            <Container>
              <Content>
                <SectionTitle text='Як долучитись до турніру?' />
                <AnimatedHowToJoinLeaderboard />
              </Content>
              <Button
                title='рейтинг кланів'
                onClick={onShowLeaderboardBtnClick}
              />
            </Container>
          </GeneralContainer>
        </Background>
      </Section>
      <LeaderboardModalWin
        setModalWinState={toggleShowLeaderboardModalWin}
        showModalWin={showLeaderboardModalWin}
        clans={clans}
      />
    </>
  );
};

export default LeaderboardSection;
