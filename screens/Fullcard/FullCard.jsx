import { Text, View } from "react-native";
import { Image } from "@rneui/themed";
import Layout from "../Layout/Layout";
import { styles } from "./styles";
import { AirbnbRating } from "@rneui/themed";

export default function FullCard({ route }) {
  const { image, description, title, price, rate, count } = route.params;

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
        <AirbnbRating count={5} defaultRating={rate} size={20} />
        <Text style={styles.textDescription}>{description}</Text>
      </View>
      <View style={styles.boxPrice}>
        <Text style={styles.text}>{`cost: ${price} $`}</Text>
        <Text style={styles.text}>{`residue ${count} units`}</Text>
      </View>
    </Layout>
  );
}
