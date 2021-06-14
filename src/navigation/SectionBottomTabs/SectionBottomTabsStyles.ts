import { StyleSheet } from "react-native";
import { makeStyles } from "../../components/Theme";

export const useStyles = makeStyles((theme) => StyleSheet.create({
  sceneContainer: {
    backgroundColor: theme.palette.background[100]
  },
  tabBar: {
    backgroundColor: theme.palette.background[200],
    position: 'absolute',
    elevation: 0,
    borderWidth: 0,
    minHeight: 57,
    paddingVertical: 10
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabLabel: {
    fontSize: 12,
    marginBottom: 5,
  },
  active: {
    color: theme.palette.primary[500]
  },
  inactive: {
    color: theme.palette.background[900]
  }
}))