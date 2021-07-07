import { StyleSheet } from 'react-native';
import { makeStyles } from '../Theme';

export const useStyles = makeStyles((theme) =>
  StyleSheet.create({
    backdrop: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    loader: {
      color: theme.palette.contrast[100],
    },
  }),
);
