import styled from '@emotion/styled';

export const Label = styled.label`
  position: relative;
  display: block;
  cursor: pointer;
  transition: transform ${({ theme }) => theme.transitionDurationAndFunc};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    &:has(input:is(:hover, :focus, :checked)) {
      transform: translateY(-8px);
    }
  }
`;

export const Input = styled.input`
  position: absolute;
  transform: scale(0);
`;

export const CustomRadioBtn = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)}px;
  padding: ${({ theme: { spacing } }) => `${spacing(2)}px ${spacing(5)}px`};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding: ${({ theme }) => theme.spacing(6)}px;
  }

  & > svg {
    position: relative;
    width: 46px;
    height: 46px;
    fill: ${({ theme }) => theme.colors.white};
    transition: fill ${({ theme }) => theme.transitionDurationAndFunc};

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
      width: 56px;
      height: 56px;
    }

    label:has(input:is(:hover, :focus, :checked)) > & {
      fill: #052d44;
    }
  }
`;

export const Title = styled.span`
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 18px;
  font-weight: 400;
  line-height: 1;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 30px;
  }

  label:has(input:is(:hover, :focus, :checked)) > span > & {
    color: #052d44;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 5px;
  width: 311px;
  max-width: 311px;
  height: 65px;
  transform: translateY(-50%);
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    left: 50%;
    width: 95%;
    max-width: 95%;
    height: 100%;
    transform: translateX(-50%) translateY(-50%);
  }

  label:not(:has(input:is(:hover, :focus, :checked))) > span > & {
    opacity: 0;
  }
`;
