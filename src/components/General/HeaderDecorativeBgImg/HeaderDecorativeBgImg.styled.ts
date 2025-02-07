import styled from '@emotion/styled';
import decorativeBgImg from '@/images/header/header-decorative-bg.png';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: calc(50% - 44px);
  display: flex;
  width: 100%;
  height: 100%;
  padding-left: ${({ theme }) => theme.spacing(100)}px;
  background-image: url(${decorativeBgImg});
  background-position: 0 0;
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: none;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 133px;
  left: 70px;
  width: 725px;
  height: 542px;
`;

export const Background = styled.div`
  flex-grow: 1;
  height: 100%;
  background-color: #ffe600;
`;
