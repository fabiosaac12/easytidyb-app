import { makeStyles } from 'components/Theme';

export const useStyles = makeStyles(theme => ({
  headerStyle: {
    backgroundColor: theme.background[500],
    elevation: 2
  },
  cardStyle: {
    backgroundColor: theme.background[100]
  }
}));
