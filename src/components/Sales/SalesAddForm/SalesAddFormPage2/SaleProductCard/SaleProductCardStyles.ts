import { StyleSheet } from 'react-native';
import { makeStyles } from '../../../../Theme';

export const useStyles = makeStyles((theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: theme.palette.primary[500],
      borderRadius: 32,
      ...theme.shadows[4],
      paddingHorizontal: 10,
      paddingVertical: 15,
      marginBottom: 10,
    },
    defaultImage: {
      height: '100%',
      paddingHorizontal: 30,
      paddingVertical: 40,
    },
    defaultImageIcon: {
      color: theme.palette.text.button,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
    },
    name: {
      fontSize: 22,
      color: theme.palette.text.button,
    },
    chars: {
      fontSize: 15,
      color: theme.palette.text.button,
      marginBottom: 10,
    },
    info: {
      fontSize: 13,
      color: theme.palette.text.button,
    },
    actionButtonsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 7,
    },
    actionButton: {
      padding: 6,
    },
    editIcon: {
      color: theme.palette.text.button,
    },
    deleteIcon: {
      color: theme.palette.text.button,
    },
  }),
);
