import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  card: {
    width: 200,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    marginTop: 50,
  },
  errorText: {
    flex: 1,
    textAlign: "center",
    fontSize: 30,
    marginTop: 50,
  },
});
