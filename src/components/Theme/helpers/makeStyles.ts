import { useTheme } from '../context';
import { Theme } from '../models/Theme';

export const makeStyles = <T>(generateStyles: (theme: Theme) => T) => () => {
  const { theme } = useTheme();

  return generateStyles(theme);
};
