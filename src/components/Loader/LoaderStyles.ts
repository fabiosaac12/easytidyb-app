import { StyleSheet, useWindowDimensions } from 'react-native';
import { makeStyles } from '../Theme';

export const useStyles = makeStyles((theme) =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      elevation: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    loader: {
      color: theme.palette.contrast[100],
    },
  }),
);
