import { StyleSheet } from 'react-native';
import { makeStyles } from '../../Theme';

export const useStyles = makeStyles((theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: theme.palette.primary[500],
      borderRadius: 32,
      ...theme.shadows[4],
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    defaultImage: {
      padding: 13,
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
    char1: {
      fontSize: 12,
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
