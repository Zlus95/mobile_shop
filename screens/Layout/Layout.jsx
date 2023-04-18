import { Text, View, ScrollView } from "react-native";
import { styles } from "./styles";

export default function Layout({ children, title }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleBox}>
          <Text>{title}</Text>
        </View>
        <View>{children}</View>
      </View>
    </ScrollView>
  );
}
