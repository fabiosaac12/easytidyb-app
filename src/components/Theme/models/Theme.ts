export interface Theme {
  name: string,
  spacing: (n?: number) => number;
  radius: (n?: number) => number;
  greys: {
    100: string,
    200: string,
    300: string,
    400: string,
    500: string,
    600: string,
    700: string,
    800: string,
    900: string
  },
  white: string,
  black: string,
  background: {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;  
  },
  contrast: {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  },
  text: {
    primary: string;
    secondary: string;
    button: string;  },
  button: {
    red: string;
    orange: string;
    yellow: string;
    green: string;
    lightBlue: string;
    darkBlue: string;
    purple: string;
    pink: string;  
  }
}