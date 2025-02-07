declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: {
    white: string;
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
    luckiestGuyRUSBELUKR: string;
  };
  breakpoints: { tablet: number; desktop: number };
  transitionDurationAndFunc: string;
  spacing: (value?: number) => number;
}

const theme: ITheme = {
  colors: {
    white: '#ffffff',
  },
  fontFamily: {
    proximaNova: 'Proxima Nova',
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
  // shadows: {  },
  transitionDurationAndFunc: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => value * 4,
};

export default theme;
