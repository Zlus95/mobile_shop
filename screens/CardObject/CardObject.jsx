import { Card } from "@rneui/themed";
import { View, Image, Text } from "react-native";
import { styles } from "./styles";
import { sliced } from "../utils/utils";

export default function CardObject({ title, price, image }) {
  return (
    <Card containerStyle={styles.containerStyle} wrapperStyle={{}}>
      <Card.Title style={styles.cardTitle}>
        <Text>{sliced(title)}</Text>
      </Card.Title>
      <Card.Divider />
      <View style={styles.boxImage}>
        <Image
          style={styles.img}
          resizeMode="contain"
          source={{
            uri: image,
          }}
        />
        <Text>{`${price} $`}</Text>
      </View>
    </Card>
  );
}
