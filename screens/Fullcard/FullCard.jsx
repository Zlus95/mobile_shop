import { Text, View } from "react-native";
import { Image } from "@rneui/themed";
import Layout from "../Layout/Layout";
import { styles } from "./styles";

export default function FullCard({ route }) {
  const { image, description, title, price } = route.params;
  return (
    <Layout title={title}>
      <View style={styles.box}>
        <Image
          containerStyle={{}}
          placeholderStyle={{}}
          source={{
            uri: image,
          }}
          style={styles.img}
        />
        <Text style={styles.textPrice}>{`Price: ${price} $`}</Text>
        <Text style={styles.textDescription}>{description}</Text>
      </View>
    </Layout>
  );
}
