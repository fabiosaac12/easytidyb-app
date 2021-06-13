import { StyleSheet } from "react-native";
import { makeStyles } from "../Theme";

export const useStyles = makeStyles(theme => StyleSheet.create({
  container: {
    elevation: 5,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    paddingVertical: theme.spacing(2),
    paddingHorizontal: theme.spacing(3),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: theme.radius(),
    opacity: 0.9
  },
  info: {
    backgroundColor: theme.greys[900]
  },
  success: {
    backgroundColor: theme.button.green
  },
  danger: {
    backgroundColor: theme.button.red
  }
}));
