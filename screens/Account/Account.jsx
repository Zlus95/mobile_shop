import { Text, View, ActivityIndicator } from "react-native";
import Layout from "../Layout/Layout";
import React, { useState, useEffect } from "react";
import { Avatar } from "@rneui/themed";
import { firstLetterToUppercase } from "../utils/utils";
import { styles } from "./styles";

export default function Account() {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://fakestoreapi.com/users/1")
      .then((res) => res.json())
      .then((json) => setUser(json))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Layout title="Account Page">
      {isLoading ? (
        <ActivityIndicator size="large" color="#ca71eb" style={styles.loader} />
      ) : (
        <>
          {user ? (
            <View style={styles.wrap}>
              <View style={styles.container}>
                <Text style={styles.textContainer}>Personal information</Text>
                <View style={styles.avatarContainer}>
                  <Avatar
                    size="large"
                    rounded
                    title={`${user.name.firstname[0].toUpperCase()}${user.name.lastname[0].toUpperCase()}`}
                    containerStyle={styles.avatarContainerStyle}
                  />
                  <Text
                    style={styles.mainText}
                  >{`Name: ${firstLetterToUppercase(
                    user.name.firstname
                  )} ${firstLetterToUppercase(user.name.lastname)}`}</Text>
                </View>
              </View>
              <View style={styles.container}>
                <Text style={styles.textContainer}>Contact information</Text>
                <View style={styles.contactContainer}>
                  <Text style={styles.mainText}>{`E-mail: ${user.email}`}</Text>
                  <Text style={styles.mainText}>{`Phone: ${user.phone}`}</Text>
                </View>
                <View style={styles.contactContainer}>
                  <Text
                    style={styles.mainText}
                  >{`Address: ${user.address?.city}, ${user.address?.street}, ${user.address?.number}, ${user.address?.zipcode}`}</Text>
                </View>
              </View>
            </View>
          ) : (
            <View>
              <Text style={styles.textError}>
                Server error. Please try again later.
              </Text>
            </View>
          )}
        </>
      )}
    </Layout>
  );
}
