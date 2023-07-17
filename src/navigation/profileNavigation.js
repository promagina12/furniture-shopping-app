import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../screens/profile/Profile";
import MyOrder from "../screens/profile/MyOrder";
import Back from "../assets/svg/chevronLeft.svg";
import { StatusBar } from "react-native";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MERRI_BOLD } from "../assets/theme/fonts";

const ProfileStack = createStackNavigator();

const MyTabBar = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable onPress={onPress}>
          <Back />
        </Pressable>
        <Text style={styles.headerText}>My order</Text>
        <View />
      </View>
    </View>
  );
};

const ProfileNavigation = () => {
  const navigation = useNavigation();

  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <ProfileStack.Screen
        name="MyOrder"
        component={MyOrder}
        options={{
          header: () => <MyTabBar onPress={() => navigation.goBack()} />,
        }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigation;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#E5E5E5",
  },

  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },

  headerText: {
    fontSize: 18,
    color: "#303030",
    ...MERRI_BOLD,
  },
});
