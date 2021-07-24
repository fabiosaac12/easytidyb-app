import { StyleSheet } from 'react-native';
import { makeStyles } from '../Theme';

export const useStyles = makeStyles(() =>
  StyleSheet.create({
    spacer: {
      height: 15,
    },
  }),
);
