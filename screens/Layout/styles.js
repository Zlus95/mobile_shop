import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "rgb(32, 137, 220)",
  },
  titleBox: {
    marginLeft: 20,
  },
  title: {
    fontSize: 20,
  },
});
