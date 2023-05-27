import { View, TouchableOpacity, ActivityIndicator, Text } from "react-native";
import Layout from "../Layout/Layout";
import React, { useEffect, useState } from "react";
import CardObject from "../CardObject/CardObject";
import { styles } from "./styles";
import { Input } from "@rneui/themed";

export default function Home({ navigation }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearh] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .finally(() => setIsLoading(false));
  }, []);

  const filterProducts = () => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <Layout title="Home">
      {isLoading ? (
        <ActivityIndicator size="large" color="#ca71eb" style={styles.loader} />
      ) : (
        <View style={styles.container}>
          <Input
            placeholder="Search"
            leftIcon={{
              type: "font-awesome",
              name: "search",
            }}
            onChangeText={setSearh}
            value={search}
          />
          {filterProducts().length > 0 ? (
            filterProducts().map((element) => (
              <View key={element.id} style={styles.card}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("FullCard", {
                      title: element.title,
                      price: element.price,
                      image: element.image,
                      category: element.category,
                      description: element.description,
                      rate: element.rating.rate,
                      count: element.rating.count,
                    })
                  }
                >
                  <CardObject
                    title={element.title}
                    price={element.price}
                    image={element.image}
                  />
                </TouchableOpacity>
              </View>
            ))
          ) : (
            <Text style={styles.errorText}>Not Found</Text>
          )}
        </View>
      )}
    </Layout>
  );
}
