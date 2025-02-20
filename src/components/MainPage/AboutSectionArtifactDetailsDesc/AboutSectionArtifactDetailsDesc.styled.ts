import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 529px;
  }
`;

export const NameWrap = styled.div`
  position: absolute;
  top: -79px;
  left: 72px;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: -117px;
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
  max-width: 120px;
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
    max-width: 220px;
    font-size: 36px;
    text-shadow: 0px 0px 0 #052d44, -1px 0px 0 #052d44, -1px 1px 0 #052d44,
      0px 1px 0 #052d44, 1px 1px 0 #052d44, 1px 0px 0 #052d44,
      1px -1px 0 #052d44, 0px -1px 0 #052d44, -1px -1px 0 #052d44,
      0px 6px 0 ${({ theme }) => theme.colors.black};
  }
`;

export const DescWrap = styled.div`
  position: absolute;
  top: -30px;
  left: 128px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: -40px;
    left: 88px;
  }
`;

export const Desc = styled.p`
  color: #052d44;
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 11px;
  font-weight: 400;
  line-height: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 19px;
  }
`;

export const ArtifactsWrap = styled.div`
  height: 200px;
  border-radius: 18px;
  background-color: rgba(255, 255, 255, 0.25);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    height: 360px;
  }
`;
