import 'modern-normalize';
import 'swiper/css';
import { FC } from 'react';
import { Global, css } from '@emotion/react';
import { theme } from '@/constants';
import {
  luckiestGuyRUSBELUKRRegular,
  proximaNovaBold,
  proximaNovaExtraBold,
  proximaNovaRegular,
  proximaNovaSemiBold,
} from '@/fonts';

const GlobalStyles: FC = () => (
  <Global
    styles={css`
      @font-face {
        font-family: ${theme.fontFamily.proximaNova};
        src: local(${theme.fontFamily.proximaNova}),
          url(${proximaNovaExtraBold}) format('truetype');
        font-weight: 800;
      }

      @font-face {
        font-family: ${theme.fontFamily.proximaNova};
        src: local(${theme.fontFamily.proximaNova}),
          url(${proximaNovaBold}) format('truetype');
        font-weight: 700;
      }

      @font-face {
        font-family: ${theme.fontFamily.proximaNova};
        src: local(${theme.fontFamily.proximaNova}),
          url(${proximaNovaSemiBold}) format('truetype');
        font-weight: 600;
      }

      @font-face {
        font-family: ${theme.fontFamily.proximaNova};
        src: local(${theme.fontFamily.proximaNova}),
          url(${proximaNovaRegular}) format('truetype');
        font-weight: 400;
      }

      @font-face {
        font-family: ${theme.fontFamily.luckiestGuyRUSBELUKR};
        src: local(${theme.fontFamily.luckiestGuyRUSBELUKR}),
          url(${luckiestGuyRUSBELUKRRegular}) format('truetype');
        font-weight: 400;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        background-color: #a38ac5;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
          'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
          'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-y: scroll;
      }

      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        margin: 0;
      }

      ul,
      ol {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      img {
        display: block;
        max-width: 100%;
        height: auto;
      }

      button {
        cursor: pointer;
      }

      a {
        text-decoration: none;
      }
    `}
  />
);

export default GlobalStyles;
