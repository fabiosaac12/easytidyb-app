import { StyleSheet } from "react-native";
import { makeStyles } from "../Theme";

export const useStyles = makeStyles(theme => StyleSheet.create({
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    zIndex: 200,
    backgroundColor: '#00000050',
  },
  loadder: {
    color: theme.contrast[100]
  }
}));
