import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";

import Search from "../../assets/svg/search.svg";
import Logout from "../../assets/svg/exit.svg";
import ProfilePic from "../../assets/svg/profilePic.svg";
import Column from "../../components/Column";
import { useNavigation } from "@react-navigation/native";
import { MERRI_BOLD, NONI_BOLD, NONI_REG } from "../../assets/theme/fonts";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Search />
        <Text style={styles.headerText}>Profile</Text>
        <Logout />
      </View>
      <View style={styles.profileView}>
        <ProfilePic />
        <View style={styles.nameView}>
          <Text style={styles.name}>Bruno Pham</Text>
          <Text style={styles.email}>bruno203@gmail.com</Text>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <Column
          description
          title="My orders"
          desc="Already have 10 orders"
          onPress={() => navigation.navigate("MyOrder")}
        />
        <Column
          description
          title="Shipping Addresses"
          desc="03 Addresses"
          onPress={() => navigation.navigate("ShippingAdd")}
        />
        <Column
          description
          title="Payment Method"
          desc="You have 2 cards"
          onPress={() => navigation.navigate("PaymentMethod")}
        />
        <Column
          description
          title="My reviews"
          desc="Reviews for 5 items"
          onPress={() => navigation.navigate("MyReviews")}
        />
        <Column
          description
          title="Setting"
          desc="Notification, Password, FAQ, Contact"
          onPress={() => navigation.navigate("Settings")}
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  profileView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 18,
  },

  nameView: {
    marginLeft: 20,
  },

  bodyContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },

  name: {
    fontSize: 20,
    color: "#303030",
    ...NONI_BOLD,
  },

  email: {
    fontSize: 14,
    color: "#808080",
    ...NONI_REG
  },
});
