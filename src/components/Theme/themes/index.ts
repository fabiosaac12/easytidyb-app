import { light } from './light';
import { dark } from './dark';
import { Theme } from '../models/Theme';
import { Themes } from '../models/Themes';

export const common = {
  spacing: (n = 1) => 7 * n,
  radius: (n = 1) => 10 * n,
  greys: {
    100: '#f0f0f0',
    200: '#e0e0e0',
    300: '#d5d5d5',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121'
  },
  white: '#fcfcfc',
  black: '#282828'
};

export const themes: Themes = {
  light: { ...common, ...light },
  dark: { ...common, ...dark }
};

export const addTheme = (name: string, theme: Theme) => themes[name] = theme;