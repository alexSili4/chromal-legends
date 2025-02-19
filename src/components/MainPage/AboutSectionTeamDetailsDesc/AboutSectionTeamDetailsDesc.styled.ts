import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 529px;
  }
`;

export const NameWrap = styled.div`
  position: absolute;
  top: -155px;
  left: 69px;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: -288px;
    left: 0px;
    gap: ${({ theme }) => theme.spacing(4)}px;
  }

  & > svg {
    width: 46px;
    height: 46px;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
      width: 72px;
      height: 72px;
    }
  }
`;

export const Name = styled.p`
  max-width: 150px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 20px;
  font-weight: 400;
  line-height: 1;
  text-shadow: -1px -1px 0 #052d44, 1px -1px 0 #052d44, -1px 1px 0 #052d44,
    1px 1px 0 #052d44, 0px 3px 0 ${({ theme }) => theme.colors.black},
    -1px 3px 0 ${({ theme }) => theme.colors.black},
    1px 3px 0 ${({ theme }) => theme.colors.black};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    max-width: 267px;
    font-size: 36px;
    text-shadow: -5px -5px 0 ${({ theme }) => theme.colors.black},
      -5px 0px 0 ${({ theme }) => theme.colors.black},
      -5px 5px 0 ${({ theme }) => theme.colors.black},
      0px -5px 0 ${({ theme }) => theme.colors.black},
      0px 5px 0 ${({ theme }) => theme.colors.black},
      5px -5px 0 ${({ theme }) => theme.colors.black},
      5px 0px 0 ${({ theme }) => theme.colors.black},
      5px 5px 0 ${({ theme }) => theme.colors.black};
  }
`;

export const DescWrap = styled.div`
  border: 7px solid #052d44;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme: { spacing } }) => `${spacing(9)}px ${spacing(8)}px`};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding: ${({ theme: { spacing } }) => `${spacing(11)}px ${spacing(8)}px`};
    border-radius: 18px;
  }
`;

export const Desc = styled.p`
  color: #052d44;
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 12px;
  font-weight: 400;
  line-height: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 20px;
  }
`;
