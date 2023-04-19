import { View } from "react-native";
import Layout from "../Layout/Layout";
import React, { useEffect, useState } from "react";
import CardObject from "../CardObject/CardObject";
import { styles } from "./styles";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <Layout title="Home Page">
      <View style={styles.container}>
        {products.map((element) => (
          <View key={element.id} style={styles.card}>
            <CardObject
              title={element.title}
              price={element.price}
              image={element.image}
            />
          </View>
        ))}
      </View>
    </Layout>
  );
}
