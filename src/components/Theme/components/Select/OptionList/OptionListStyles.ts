import { StyleSheet } from 'react-native';
import { makeStyles } from '../../../helpers';

export const useStyles = makeStyles((theme) =>
  StyleSheet.create({
    backdrop: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    container: {
      backgroundColor: theme.palette.background[100],
      borderRadius: 25,
      width: '95%',
      maxHeight: '90%',
      padding: theme.spacing(3),
      paddingTop: theme.spacing(4),
      ...theme.shadows[3],
    },
    option: {
      flexDirection: 'row',
      backgroundColor: theme.palette.background[200],
      borderColor: theme.palette.primary[500],
      borderWidth: 1.5,
      borderRadius: 32,
      ...theme.shadows[1],
      paddingHorizontal: 10,
      marginBottom: theme.spacing(),
    },
    disabledOption: {
      backgroundColor: theme.palette.background[500],
    },
    defaultImage: {
      padding: 10,
    },
    defaultImageIcon: {
      color: theme.palette.primary[500],
    },
    content: {
      flex: 1,
      justifyContent: 'center',
    },
    label: {
      fontSize: 21,
      color: theme.palette.primary[500],
    },
    extra: {
      fontSize: 11,
      color: theme.palette.primary[500],
    },
  }),
);
