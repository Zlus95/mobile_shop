import { TouchableOpacity, View, Text, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import CardObject from "../CardObject/CardObject";
import Layout from "../Layout/Layout";
import { styles } from "./styles";
import { firstLetterToUppercase } from "../utils/utils";
import { Input } from "@rneui/themed";

export default function CurrentCategory({ route, navigation }) {
  const { currentCategory } = route.params;
  const [category, setCategory] = useState([]);
  const [search, setSearh] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://fakestoreapi.com/products/category/${currentCategory}`)
      .then((res) => res.json())
      .then((json) => setCategory(json))
      .finally(() => setIsLoading(false));
  }, []);

  const filterСategory = () => {
    return category.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <Layout title={firstLetterToUppercase(currentCategory)}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#ca71eb" style={styles.loader} />
      ) : (
        <View style={styles.boxCurrentCategory}>
          <Input
            placeholder="Search"
            leftIcon={{
              type: "font-awesome",
              name: "search",
            }}
            onChangeText={setSearh}
            value={search}
          />
          {filterСategory().length > 0 ? (
            filterСategory().map((element) => (
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
            ))
          ) : (
            <Text style={styles.errorText}>Not Found</Text>
          )}
        </View>
      )}
    </Layout>
  );
}
