import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  width: ${({ theme: { container, padding } }) =>
    container.mobile + padding.container * 2}px;
  padding-left: ${({ theme }) => theme.padding.container}px;
  padding-right: ${({ theme }) => theme.padding.container}px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: ${({ theme: { container, padding } }) =>
      container.desktop + padding.container * 2}px;
  }
`;
