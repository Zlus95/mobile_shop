import { Text, View } from "react-native";
import Layout from "../Layout/Layout";
import React, { useState, useEffect } from "react";
import { firstLetterToUppercase } from "../utils/utils";
import { styles } from "./styles";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);

  return (
    <Layout title="Categories Page">
      {categories.map((category, index) => (
        <View key={index} style={styles.box}>
          <Text style={styles.categoryTitle}>
            {firstLetterToUppercase(category)}
          </Text>
        </View>
      ))}
    </Layout>
  );
}
