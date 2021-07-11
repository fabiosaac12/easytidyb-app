import { StyleSheet } from 'react-native';
import { makeStyles } from '../../helpers';

export const useStyles = makeStyles((theme) =>
  StyleSheet.create({
    container: {
      height: 60,
      borderColor: theme.palette.greys[500],
      borderWidth: theme.name === 'dark' ? 1.5 : 1,
      paddingVertical: theme.spacing(0.7),
      paddingHorizontal: theme.spacing(2),
      borderRadius: theme.radius(2),
      margin: theme.spacing(),
      justifyContent: 'center',
    },
    containerWithValue: {
      borderColor: theme.palette.primary[500],
    },
    placeholder: {
      fontSize: 18,
    },
    value: {
      color: theme.palette.text.primary,
      fontSize: 16,
      paddingTop: 3,
    },
  }),
);
