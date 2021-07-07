import { StyleSheet } from 'react-native';
import { makeStyles } from '../Theme';

export const useStyles = makeStyles((theme) =>
  StyleSheet.create({
    container: {
      position: 'absolute',
    },
    br: {
      bottom: 60 + theme.spacing(2),
      right: theme.spacing(2),
    },
    bl: {
      bottom: 25,
      left: 25,
    },
    fab: {
      width: 60,
      height: 60,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.palette.primary[800],
      ...theme.shadows[4],
    },
    icon: {
      color: theme.palette.text.button,
    },
  }),
);
