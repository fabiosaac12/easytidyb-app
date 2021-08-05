import { makeStyles } from '../../Theme';

export const useStyles = makeStyles((theme) => ({
  headerStyle: {
    backgroundColor: theme.palette.background[500],
    elevation: 2,
  },
  cardStyle: {
    backgroundColor: theme.palette.background[100],
  },
}));
