import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { makeStyles } from '../../components/Theme';

export const useStyles = makeStyles((theme) => {
  const insets = useSafeAreaInsets();

  return StyleSheet.create({
    layout: {
      paddingTop: insets.top + theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingLeft: insets.left + theme.spacing(2),
      paddingRight: insets.right + theme.spacing(2),
    },
  });
});
