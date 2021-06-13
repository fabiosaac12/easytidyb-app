import { StyleSheet } from "react-native";
import { makeStyles } from "../../helpers";

export const useStyles = makeStyles(theme => StyleSheet.create({
  button: {
    padding: theme.spacing(1.3),
    elevation: 3,
    borderRadius: theme.radius(),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing()
  },
  red: {
    backgroundColor: theme.button.red
  },
  orange: {
    backgroundColor: theme.button.orange
  },
  yellow: {
    backgroundColor: theme.button.yellow
  },
  green: {
    backgroundColor: theme.button.green
  },
  lightBlue: {
    backgroundColor: theme.button.lightBlue
  },
  darkBlue: {
    backgroundColor: theme.button.darkBlue
  },
  purple: {
    backgroundColor: theme.button.purple
  },
  pink: {
    backgroundColor: theme.button.pink
  }
}));