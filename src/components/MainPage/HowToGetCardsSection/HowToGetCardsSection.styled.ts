import styled from '@emotion/styled';
import sectionBgMob from '@/images/conditions/section-bg-mob.png';

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.spacing(15)}px;
  padding-bottom: ${({ theme }) => theme.spacing(11)}px;
  background-image: linear-gradient(
      180deg,
      #ffe600 16%,
      rgba(242, 201, 1, 0) 100%
    ),
    url(${sectionBgMob});
  background-position: bottom 0 left 0;
  background-size: 100% 100%, 100% auto;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(10)}px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(15)}px;
`;
