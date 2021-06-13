import { makeStyles } from '../Theme';
import { StyleSheet } from 'react-native';

export const useStyles = makeStyles(theme => StyleSheet.create({
  bottomMenu: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 60
  },
  button: {
    height: '100%',
    backgroundColor: theme.button.red
  }
}));
