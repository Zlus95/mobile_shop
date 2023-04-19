import { Text, View, ScrollView, SafeAreaView } from "react-native";
import { styles } from "./styles";

export default function Layout({ children, title }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.titleBox}>
          <Text>{title}</Text>
        </View>
        <View>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}
