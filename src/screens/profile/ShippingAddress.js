import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "react-native";

import Back from "../../assets/svg/chevronLeft.svg";
import ShippingAddressCard from "../../components/ShippingAddressCard";
import Checkbox from "expo-checkbox";
import Plus from "../../assets/svg/plus.svg";
import { useNavigation } from "@react-navigation/native";
import { MERRI_BOLD, NONI_REG } from "../../assets/theme/fonts";

const DATA = Array.from({ length: 3 });

const ShippingAddress = () => {
  const [isChecked, setChecked] = useState(false);
  const navigation = useNavigation();

  const renderItem = () => {
    return (
      <View style={{ paddingHorizontal: 20, marginBottom: 31 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <Checkbox
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#242424" : undefined}
          />
          <Text
            style={{
              marginLeft: 10,
              fontSize: 18,
              color: isChecked ? "#242424" : "#999999",
              ...NONI_REG,
            }}
          >
            Use as the shipping address
          </Text>
        </View>
        <ShippingAddressCard />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <Back />
        </Pressable>
        <Text style={styles.headerText}>Shipping Address</Text>
        <View />
      </View>
      <FlatList data={DATA} renderItem={renderItem} style={styles.flatlist} />
      <Pressable
        style={styles.fabButton}
        onPress={() => navigation.navigate("AddAddress")}
      >
        <Plus />
      </Pressable>
    </View>
  );
};

export default ShippingAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#E5E5E5",
    position: "relative",
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

  flatlist: {
    marginTop: 19,
  },

  fabButton: {
    position: "absolute",
    bottom: 50,
    right: 20,
    padding: 14,
    backgroundColor: "#FFFFFF",
    borderRadius: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
