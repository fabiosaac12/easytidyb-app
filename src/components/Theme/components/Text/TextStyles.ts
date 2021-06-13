import { StyleSheet } from "react-native";
import { makeStyles } from "../../helpers";

export const useStyles = makeStyles(theme => StyleSheet.create({
  title: {
    color: theme.text.primary,
    fontSize: 22
  },
  title2: {
    color: theme.text.secondary,
    fontSize: 20
  },
  subtitle: {
    color: theme.text.primary,
    fontSize: 18
  },
  subtitle2: {
    color: theme.text.secondary,
    fontSize: 17
  },
  body: {
    color: theme.text.primary,
    fontSize: 15
  },
  body2: {
    color: theme.text.secondary,
    fontSize: 14
  },
  button: {
    color: theme.text.button,
    fontSize: 16
  }
}));