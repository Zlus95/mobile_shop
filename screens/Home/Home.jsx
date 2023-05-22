import { View, TouchableOpacity, ActivityIndicator, Text } from "react-native";
import Layout from "../Layout/Layout";
import React, { useEffect, useState } from "react";
import CardObject from "../CardObject/CardObject";
import { styles } from "./styles";

export default function Home({ navigation }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Layout title="Home">
      {isLoading ? (
        <ActivityIndicator size="large" color="#ca71eb" style={styles.loader} />
      ) : (
        <View style={styles.container}>
          {products ? (
            products.map((element) => (
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
            <Text style={styles.errorText}>
              Server error. Please try again later.
            </Text>
          )}
        </View>
      )}
    </Layout>
  );
}
