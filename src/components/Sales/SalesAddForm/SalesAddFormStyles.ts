import { makeStyles } from '../../Theme';
import { StyleSheet } from 'react-native';

export const useStyles = makeStyles((theme) =>
  StyleSheet.create({
    headerStyle: {
      backgroundColor: theme.palette.background[500],
      elevation: 2,
    },
    cardStyle: {
      backgroundColor: theme.palette.background[100],
    },
  }),
);
