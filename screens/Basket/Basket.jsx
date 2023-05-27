import { TouchableOpacity, View, Text } from "react-native";
import Layout from "../Layout/Layout";
import { useModalContext } from "../../Context/ContextProvider";
import CardObject from "../CardObject/CardObject";
import { styles } from "./styles";

export default function Basket({ navigation }) {
  const { basket } = useModalContext();

  return (
    <Layout title="Basket">
      <View style={styles.container}>
        {basket.length ? (
          basket.map((element, index) => (
            <TouchableOpacity
              key={index}
              style={styles.styleButton}
              onPress={() =>
                navigation.navigate("FullCard", {
                  title: element.title,
                  price: element.price,
                  image: element.image,
                  category: element.category,
                  description: element.description,
                  rate: element.rate,
                  count: element.count,
                })
              }
            >
              <CardObject
                title={element.title}
                price={element.price}
                image={element.image}
              />
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.textError}>Basket is empty</Text>
        )}
      </View>
    </Layout>
  );
}
