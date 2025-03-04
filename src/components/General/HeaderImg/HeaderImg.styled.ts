import styled from '@emotion/styled';

export const Image = styled.img`
  position: absolute;
  top: 190px;
  left: 50%;
  width: 375px;
  height: 250px;
  transform: translateX(-50%);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 150px;
    width: 660px;
    height: 440px;
  }
`;
