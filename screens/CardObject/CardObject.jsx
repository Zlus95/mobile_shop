import { Card } from "@rneui/themed";
import { View, Image, Text } from "react-native";
import { styles } from "./styles";
import { sliced } from "../utils/utils";

export default function CardObject({ title, price, image}) {

  return (
    <Card containerStyle={styles.containerStyle} wrapperStyle={{}}>
      <View style={styles.boxImage}>
        <Image
          style={styles.img}
          resizeMode="contain"
          source={{
            uri: image,
          }}
        />
      </View>
      <Card.Divider />
      <Card.Title style={styles.cardTitle}>
        <Text>{sliced(title)}</Text>
      </Card.Title>
      <Text style={styles.textPrice}>{`${price} $`}</Text>
    </Card>
  );
}
