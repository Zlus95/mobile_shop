import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    marginTop: 50,
  },
  wrap: {
    alignItems: "center",
  },
  container: {
    width: "90%",
    maxHeight: 250,
    marginTop: 30,
  },
  textContainer: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: 500,
  },
  avatarContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 30,
  },
  avatarContainerStyle: {
    backgroundColor: "purple",
  },
  mainText: {
    fontSize: 30,
  },
  contactContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 10,
    flexWrap: "wrap",
  },
  textError: {
    textAlign: "center",
    fontSize: 30,
    marginTop: 50,
  },
});
