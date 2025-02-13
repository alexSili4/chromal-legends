import styled from '@emotion/styled';
import { IStyledAnswerWrapProps } from './FAQItem.types';

export const Container = styled.div`
  border: 1px solid #001d2c;
  border-radius: 12px;
  box-shadow: 0px 4px 0px 0px #052d44;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: none;
  background-color: transparent;
  padding: ${({ theme: { spacing } }) =>
    `${spacing(5)}px ${spacing(3)}px ${spacing(5)}px ${spacing(4)}px`};

  & > svg {
    flex-shrink: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding: ${({ theme }) => theme.spacing(5)}px;
    padding-left: ${({ theme }) => theme.spacing(8)}px;
  }
`;

export const BtnTitle = styled.span`
  color: #001d2c;
  font-family: ${({ theme }) => theme.fontFamily.proximaNova};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.21;
  text-align: left;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 18px;
  }
`;

export const AnswerWrap = styled.div<IStyledAnswerWrapProps>`
  max-height: ${({ isShowElement, elementScrollHeight }) =>
    isShowElement ? elementScrollHeight : 0}px;
  padding-left: ${({ theme }) => theme.spacing(3)}px;
  padding-right: ${({ theme }) => theme.spacing(3)}px;
  overflow-y: hidden;
  transition: max-height ${({ theme }) => theme.transitionDurationAndFunc};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-left: ${({ theme }) => theme.spacing(8)}px;
    padding-right: ${({ theme }) => theme.spacing(24)}px;
  }
`;

export const Answer = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing(9)}px;
  color: #001d2c;
  font-family: ${({ theme }) => theme.fontFamily.proximaNova};
  font-size: 14px;
  font-weight: 400;
  line-height: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 18px;
  }
`;
