import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "../Home/Home";
import Categories from "../Categories/Categories";
import Basket from "../Basket/Basket";
import Account from "../Account/Account";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FullCard from "../Fullcard/FullCard";
import { firstLetterToUppercase } from "../utils/utils";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="black"
      barStyle={{ backgroundColor: "#ca71eb" }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarLabel: "Categories",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="clipboard-list-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Basket"
        component={Basket}
        options={{
          tabBarLabel: "Basket",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="basket" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomNavigation"
          component={BottomNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FullCard"
          component={FullCard}
          options={({ route }) => ({
            title: firstLetterToUppercase(route.params.category),
            headerStyle: { backgroundColor: "#1E90FF" },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
