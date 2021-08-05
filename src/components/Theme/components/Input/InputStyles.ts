import { StyleSheet } from 'react-native';
import { makeStyles } from '../../helpers';

export const useStyles = makeStyles((theme) =>
  StyleSheet.create({
    view: {
      borderColor: theme.palette.greys[500],
      borderWidth: theme.name === 'dark' ? 1.5 : 1,
      paddingVertical: theme.spacing(0.7),
      paddingHorizontal: theme.spacing(2),
      borderRadius: theme.radius(2),
      margin: theme.spacing(),
    },
    input: {
      color: theme.palette.text.primary,
      fontSize: 16,
      padding: 0,
    },
    disabledLabel: {
      color: theme.palette.greys[600],
    },
    disabledInput: {
      color: theme.palette.greys[600],
      fontSize: 16,
      padding: 3,
    },
    placeholder: {
      color: theme.palette.greys[500],
    },
  }),
);
