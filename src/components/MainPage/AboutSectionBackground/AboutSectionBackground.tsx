import { FC } from 'react';
import { Container, TeamBg } from './AboutSectionBackground.styled';
import { IProps } from './AboutSectionBackground.types';
import chromatekTeamBgMob from '@/images/about/chromatek-team-bg-mob.jpg';
import chromatekTeamBgDesk from '@/images/about/chromatek-team-bg-desk.jpg';
import colorMastersTeamBgMob from '@/images/about/color-masters-team-bg-mob.jpg';
import colorMastersTeamBgDesk from '@/images/about/color-masters-team-bg-desk.jpg';
import faunasphereRebelsTeamBgMob from '@/images/about/faunasphere-rebels-team-bg-mob.jpg';
import faunasphereRebelsTeamBgDesk from '@/images/about/faunasphere-rebels-team-bg-desk.jpg';
import legendaryTeamBgMob from '@/images/about/legendary-team-bg-mob.jpg';
import legendaryTeamBgDesk from '@/images/about/legendary-team-bg-desk.jpg';
import chronographyInstituteTeamBgMob from '@/images/about/chronography-institute-team-bg-mob.jpg';
import chronographyInstituteTeamBgDesk from '@/images/about/chronography-institute-team-bg-desk.jpg';

const AboutSectionBackground: FC<IProps> = ({
  isActiveChromatekTeam,
  isActiveChronographyInstituteTeam,
  isActiveColorMastersTeam,
  isActiveFaunasphereRebelsTeam,
  isActiveLegendaryTeam,
}) => {
  return (
    <Container>
      <TeamBg
        bgImgMob={chromatekTeamBgMob}
        bgImgDesk={chromatekTeamBgDesk}
        isCurrentBg={isActiveChromatekTeam}
      ></TeamBg>
      <TeamBg
        bgImgMob={colorMastersTeamBgMob}
        bgImgDesk={colorMastersTeamBgDesk}
        isCurrentBg={isActiveColorMastersTeam}
      ></TeamBg>
      <TeamBg
        bgImgMob={faunasphereRebelsTeamBgMob}
        bgImgDesk={faunasphereRebelsTeamBgDesk}
        isCurrentBg={isActiveFaunasphereRebelsTeam}
      ></TeamBg>
      <TeamBg
        bgImgMob={chronographyInstituteTeamBgMob}
        bgImgDesk={chronographyInstituteTeamBgDesk}
        isCurrentBg={isActiveChronographyInstituteTeam}
      ></TeamBg>
      <TeamBg
        bgImgMob={legendaryTeamBgMob}
        bgImgDesk={legendaryTeamBgDesk}
        isCurrentBg={isActiveLegendaryTeam}
      ></TeamBg>
    </Container>
  );
};

export default AboutSectionBackground;
