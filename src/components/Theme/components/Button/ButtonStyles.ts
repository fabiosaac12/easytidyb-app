import { StyleSheet } from 'react-native';
import { makeStyles } from '../../helpers';

export const useStyles = makeStyles((theme) =>
  StyleSheet.create({
    button: {
      padding: theme.spacing(1.3),
      elevation: 3,
      borderRadius: theme.radius(),
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: theme.spacing(),
    },
    primary: {
      backgroundColor: theme.palette.primary[500],
    },
    secondary: {
      backgroundColor: theme.palette.secondary[500],
    },
  }),
);
