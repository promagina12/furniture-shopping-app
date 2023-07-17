import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Delivered from "./orderTab/Delivered";
import Canceled from "./orderTab/Canceled";
import Processing from "./orderTab/Processing";

const Tab = createMaterialTopTabNavigator();

const MyOrder = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#E5E5E5" },
      }}
    >
      <Tab.Screen name="Delivered" component={Delivered} />
      <Tab.Screen name="Processing" component={Processing} />
      <Tab.Screen name="Canceled" component={Canceled} />
    </Tab.Navigator>
  );
};

export default MyOrder;

const styles = StyleSheet.create({});
