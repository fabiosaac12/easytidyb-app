import { StyleSheet } from 'react-native';
import { makeStyles } from '../../../Theme';

export const useStyles = makeStyles((theme) =>
  StyleSheet.create({
    title: {
      marginVertical: theme.spacing(2),
      fontSize: 23,
      color: theme.palette.primary[400],
    },
    cardsContainer: {
      flex: 1,
    },
    navigationButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    previousButton: {
      backgroundColor: theme.palette.background[900],
      width: '40%',
    },
    nextButton: {
      width: '40%',
    },
  }),
);
