import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import { SafeAreaView, View, Text, Image, StatusBar } from "react-native";
import TabOneScreen from "../screens/TabOneScreen";
import styles from "../screens/VideoScreen/styles";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";

const Logo = require("../assets/images/logo.png");

const HomeStack = createStackNavigator();

function CustomHeader() {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          backgroundColor: "#242424",
        }}
      >
        <Image
          resizeMode="contain"
          style={{ width: 100, height: 50 }}
          source={Logo}
        />
        <View
          style={{
            flexDirection: "row",
            width: 150,
            justifyContent: "space-between",
          }}
        >
          <Feather name="cast" size={24} color="white" />
          <AntDesign name="bells" size={24} color="white" />
          <AntDesign name="search1" size={24} color="white" />
          <FontAwesome name="user-circle-o" size={24} color="white" />
        </View>
      </View>
    </SafeAreaView>
  );
}

function HomeStackComponent() {
  return (
    <HomeStack.Navigator screenOptions={{ header: () => <CustomHeader /> }}>
      <HomeStack.Screen
        name="TabOneScreen"
        component={HomeScreen}
        options={{ headerTitle: "Home" }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackComponent;
