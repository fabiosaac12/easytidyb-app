import { StyleSheet } from 'react-native';
import { makeStyles } from '../../../../../Theme';

export const useStyles = makeStyles((theme) =>
  StyleSheet.create({
    title: {
      marginBottom: theme.spacing(2),
      fontSize: 23,
      color: theme.palette.primary[400],
    },
  }),
);
