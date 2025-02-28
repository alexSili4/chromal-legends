declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: {
    white: string;
    black: string;
    lightGray: string;
  };
  padding: {
    container: number;
  };
  container: {
    desktop: number;
    mobile: number;
  };
  fontFamily: {
    proximaNova: string;
    luckiestGuy: string;
    luckiestGuyRUSBELUKR: string;
  };
  zIndex: {
    sliderBtn: number;
    animatedModalWin: number;
  };
  breakpoints: { tablet: number; desktop: number };
  transitionDurationAndFunc: string;
  spacing: (value?: number) => number;
}

const theme: ITheme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    lightGray: '#eeeeee',
  },
  fontFamily: {
    proximaNova: 'Proxima Nova',
    luckiestGuy: 'Luckiest Guy',
    luckiestGuyRUSBELUKR: 'Luckiest Guy RUS-BEL-UKR',
  },
  // fontFamily: {  },
  // fontWeight: {  },
  // fontSize: {  },
  padding: {
    container: 16,
  },
  // borderRadius: {  },
  container: {
    mobile: 315,
    desktop: 1260,
  },
  breakpoints: { tablet: 768, desktop: 1330 },
  zIndex: {
    sliderBtn: 10,
    animatedModalWin: 100000,
  },
  // shadows: {  },
  transitionDurationAndFunc: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => value * 4,
};

export default theme;
