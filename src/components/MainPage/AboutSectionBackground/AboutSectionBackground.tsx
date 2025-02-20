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
import legendaryArtifactBgMob from '@/images/about/legendary-artifact-bg-mob.jpg';
import legendaryArtifactBgDesk from '@/images/about/legendary-artifact-bg-desk.jpg';
import speedArtifactBgMob from '@/images/about/speed-artifact-bg-mob.jpg';
import speedArtifactBgDesk from '@/images/about/speed-artifact-bg-desk.jpg';
import healthArtifactBgMob from '@/images/about/health-artifact-dg-mob.jpg';
import healthArtifactBgDesk from '@/images/about/health-artifact-dg-desk.jpg';
import controlArtifactBgMob from '@/images/about/control-artifact-bg-mob.jpg';
import controlArtifactBgDesk from '@/images/about/control-artifact-bg-desk.jpg';

const AboutSectionBackground: FC<IProps> = ({
  isActiveChromatekTeam,
  isActiveChronographyInstituteTeam,
  isActiveColorMastersTeam,
  isActiveFaunasphereRebelsTeam,
  isActiveLegendaryTeam,
  isActiveControlArtifact,
  isActiveHealthArtifact,
  isActiveLegendaryArtifact,
  isActiveSpeedArtifact,
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
      <TeamBg
        bgImgMob={legendaryArtifactBgMob}
        bgImgDesk={legendaryArtifactBgDesk}
        isCurrentBg={isActiveLegendaryArtifact}
      ></TeamBg>
      <TeamBg
        bgImgMob={speedArtifactBgMob}
        bgImgDesk={speedArtifactBgDesk}
        isCurrentBg={isActiveSpeedArtifact}
      ></TeamBg>
      <TeamBg
        bgImgMob={healthArtifactBgMob}
        bgImgDesk={healthArtifactBgDesk}
        isCurrentBg={isActiveHealthArtifact}
      ></TeamBg>
      <TeamBg
        bgImgMob={controlArtifactBgMob}
        bgImgDesk={controlArtifactBgDesk}
        isCurrentBg={isActiveControlArtifact}
      ></TeamBg>
    </Container>
  );
};

export default AboutSectionBackground;
