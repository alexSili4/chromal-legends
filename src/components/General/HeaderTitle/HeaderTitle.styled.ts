import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 604px;
  }
`;

export const Title = styled.h2`
  color: rgb(255, 255, 255);
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 50px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 86px;
  }
`;

export const Subtitle = styled.h2`
  color: #eac1fd;
  font-family: ${({ theme }) => theme.fontFamily.proximaNova};
  font-size: 16px;
  font-weight: 800;
  line-height: 1;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 24px;
  }
`;
