import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(32, 137, 220)",
    alignItems: "center",
    height: "100%",
  },
  titleBox: {
    marginTop: 30,
  },
  content: {
    flexGrow: 1,
    backgroundColor: "red",
    width: "100%",
  },
  navigatonBox: {
    flexShrink: 0,
    height: 50,
  },
});
