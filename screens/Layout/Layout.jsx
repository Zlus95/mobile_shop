import {  Text, View } from "react-native";
import { styles } from "./styles";

export default function Layout({ children, title }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <Text>{title}</Text>
      </View>
      <View style={styles.content}>{children}</View>
      <View style={styles.navigatonBox}>
        <Text>navigation</Text>
      </View>
    </View>
  );
}
