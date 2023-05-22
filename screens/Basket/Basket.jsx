import { TouchableOpacity, View, Text } from "react-native";
import Layout from "../Layout/Layout";
import { useModalContext } from "../../Context/ContextProvider";
import CardObject from "../CardObject/CardObject";

export default function Basket({ navigation }) {
  const { basket } = useModalContext();

  return (
    <Layout title="Basket">
      <View style={{ alignItems: "center" }}>
        {basket.length ? (
          basket.map((element, index) => (
            <TouchableOpacity
              key={index}
              style={{ width: 250 }}
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
          <View
            style={{
              marginTop: 50,
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 40 }}>
              Basket is empty
            </Text>
          </View>
        )}
      </View>
    </Layout>
  );
}
