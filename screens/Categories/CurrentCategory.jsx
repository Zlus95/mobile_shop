import { TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import CardObject from "../CardObject/CardObject";
import Layout from "../Layout/Layout";
import { styles } from "./styles";

export default function CurrentCategory({ route, navigation }) {
  const { currentCategory } = route.params;
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${currentCategory}`)
      .then((res) => res.json())
      .then((json) => setCategory(json));
  }, []);

  return (
    <Layout>
      <View style={styles.boxCurrentCategory}>
        {category.map((element) => (
          <TouchableOpacity
            key={element.id}
            style={styles.CurrentCategoryButton}
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
        ))}
      </View>
    </Layout>
  );
}
