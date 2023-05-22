import { TouchableOpacity, View, Text } from "react-native";
import Layout from "../Layout/Layout";
import { useModalContext } from "../../Context/ContextProvider";
import CardObject from "../CardObject/CardObject";

export default function Basket({ route, navigation }) {
  const { basket } = useModalContext();

  return (
    <Layout title="Basket">
      <View style={{ alignItems: "center" }}>
        {/* <View> */}
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
              backgroundColor: "red",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              // alignItems: "center",
              // justifyContent: "flex-end",
            }}
          >
            <Text style={{ textAlign: "center" }}>nfd</Text>
          </View>
        )}
      </View>
    </Layout>
  );
}
