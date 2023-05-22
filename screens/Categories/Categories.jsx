import Layout from "../Layout/Layout";
import React, { useState, useEffect } from "react";
import { firstLetterToUppercase } from "../utils/utils";
import { styles } from "./styles";
import { Button } from "@rneui/themed";

export default function Categories({ navigation }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);

  return (
    <Layout title="Categories">
      {categories.map((category, index) => (
        <Button
          key={index}
          title={firstLetterToUppercase(category)}
          buttonStyle={styles.categoryButton}
          titleStyle={styles.categoryTitle}
          onPress={() =>
            navigation.navigate("CurrentCategory", {
              currentCategory: category,
            })
          }
        />
      ))}
    </Layout>
  );
}
