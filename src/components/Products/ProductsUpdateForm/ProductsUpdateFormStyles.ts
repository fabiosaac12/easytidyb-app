import { makeStyles } from '../../Theme';
import { StyleSheet } from 'react-native';

export const useStyles = makeStyles((theme) =>
  StyleSheet.create({
    title: {
      marginBottom: theme.spacing(2),
      fontSize: 23,
      color: theme.palette.primary[400],
    },
    previousButton: {
      backgroundColor: theme.palette.background[900],
    }
  }),
);
