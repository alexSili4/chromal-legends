import styled from '@emotion/styled';
import {
  IStyledButtonProps,
  IStyledListWrapProps,
} from './HeaderMobileMenu.types';

export const Container = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: none;
  }
`;

export const Button = styled.button<IStyledButtonProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)}px;
  padding: ${({ theme: { spacing } }) => `${spacing(5)}px ${spacing(0)}px`};
  border: none;
  background-color: transparent;

  &:is(:hover, :focus) > svg {
    transform: rotate(${({ isShowList }) => (isShowList ? 0 : 90)}deg);
    transition: transform ${({ theme }) => theme.transitionDurationAndFunc};
  }

  & > svg {
    transform: rotate(${({ isShowList }) => (isShowList ? 90 : 0)}deg);
    transition: transform ${({ theme }) => theme.transitionDurationAndFunc};
  }
`;

export const ButtonTitle = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.proximaNova};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.19;
  text-transform: uppercase;
`;

export const ListWrap = styled.div<IStyledListWrapProps>`
  max-height: ${({ isShowElement, elementScrollHeight }) =>
    isShowElement ? elementScrollHeight : 0}px;
  overflow-y: hidden;
  transition: max-height ${({ theme }) => theme.transitionDurationAndFunc};
`;

export const List = styled.ul``;

export const ListItem = styled.li``;

export const NavLink = styled.a`
  display: block;
  padding-top: ${({ theme }) => theme.spacing(2.5)}px;
  padding-bottom: ${({ theme }) => theme.spacing(2.5)}px;
  padding-left: ${({ theme }) => theme.spacing(3)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.proximaNova};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.19;
  text-transform: uppercase;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    color: #052d44;
  }

  li:first-of-type > & {
    padding-top: 0px;
  }

  li:last-of-type > & {
    padding-bottom: ${({ theme }) => theme.spacing(5)}px;
  }
`;
