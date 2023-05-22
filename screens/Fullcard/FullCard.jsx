import { Text, View } from "react-native";
import { Image } from "@rneui/themed";
import Layout from "../Layout/Layout";
import { styles } from "./styles";
import { AirbnbRating, Button } from "@rneui/themed";
import { useModalContext } from "../../Context/ContextProvider";

export default function FullCard({ route }) {
  const { setBasket } = useModalContext();
  const { image, description, title, price, rate, count, category } =
    route.params;

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
        <View style={styles.boxPrice}>
          <Text style={styles.text}>{`cost: ${price} $`}</Text>
          <Button
            title="Buy"
            buttonStyle={{
              borderRadius: 20,
              backgroundColor: "#ca71eb",
            }}
            titleStyle={{ fontSize: 23 }}
            containerStyle={{
              height: 50,
              width: 100,
            }}
            onPress={() =>
              setBasket((prev) => [
                ...prev,
                { image, description, title, price, rate, count, category },
              ])
            }
          />
        </View>
        <Text style={styles.text}>{`residue ${count} units`}</Text>
        <AirbnbRating
          count={5}
          defaultRating={Math.round(rate)}
          size={20}
          reviews={["Terrible", "Bad", "Okay", "Good", "Great"]}
        />
        <Text style={styles.textDescription}>{description}</Text>
      </View>
    </Layout>
  );
}
