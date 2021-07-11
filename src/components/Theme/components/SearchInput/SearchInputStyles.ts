import { StyleSheet } from 'react-native';
import { makeStyles } from '../../helpers';

export const useStyles = makeStyles((theme) =>
  StyleSheet.create({
    view: {
      borderColor: theme.palette.greys[500],
      borderWidth: theme.name === 'dark' ? 1.5 : 1,
      paddingVertical: theme.spacing(0.7),
      paddingHorizontal: theme.spacing(2),
      borderRadius: theme.radius(5),
      marginBottom: theme.spacing(3),
    },
    input: {
      color: theme.palette.text.primary,
      fontSize: 17,
      padding: 0,
      height: 35,
    },
    placeholder: {
      color: theme.palette.greys[500],
    },
  }),
);
