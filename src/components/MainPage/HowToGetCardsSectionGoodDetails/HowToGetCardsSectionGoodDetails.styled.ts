import styled from '@emotion/styled';
import { IStyledContainerProps } from './HowToGetCardsSectionGoodDetails.types';

export const Link = styled.a`
  display: flex;
`;

export const Container = styled.span<IStyledContainerProps>`
  width: 186px;
  height: 215px;
  border: 7px solid #052d44;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 272px;
    height: 314px;
  }
`;
