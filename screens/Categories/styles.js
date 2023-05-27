import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  categoryButton: {
    alignItems: "center",
    borderWidth: 3,
    margin: 20,
    borderRadius: 20,
    backgroundColor: "#ca71eb",
  },
  categoryTitle: {
    fontSize: 30,
    color: "black",
  },
  boxCurrentCategory: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  CurrentCategoryButton: {
    width: 200,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    marginTop: 50,
  },
  errorText: {
    textAlign: "center",
    fontSize: 30,
    margin: "30%",
  },
});
