import { StyleSheet } from 'react-native';
import { makeStyles } from '../Theme';

export const useStyles = makeStyles((theme) =>
  StyleSheet.create({
    backdrop: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    container: {
      elevation: 5,
      position: 'absolute',
      bottom: 20,
      left: 20,
      right: 20,
      paddingVertical: theme.spacing(2),
      paddingHorizontal: theme.spacing(3),
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderRadius: theme.radius(),
      opacity: 0.9,
    },
    info: {
      backgroundColor: theme.palette.greys[900],
    },
    success: {
      backgroundColor: '#30c25c',
    },
    danger: {
      backgroundColor: '#bd3131',
    },
  }),
);
