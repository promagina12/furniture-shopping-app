import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Pen from "../assets/svg/pen.svg";
import Divider from "./Divider";
import { NONI_BOLD, NONI_REG } from "../assets/theme/fonts";

const ShippingAddressCard = ({ checkOut }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.name}>Bruno Fernandes</Text>
        {!checkOut && <Pen />}
      </View>
      <Divider />
      <Text style={styles.description}>
        25 rue Robert Latouche, Nice, 06200, Côte D’azur, France
      </Text>
    </View>
  );
};

export default ShippingAddressCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 15,
    borderRadius: 8,
  },

  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
    alignItems: "center",
    paddingHorizontal: 20,
  },

  name: {
    fontSize: 18,
    color: "#242424",
    ...NONI_BOLD,
  },

  description: {
    marginTop: 10,
    fontSize: 14,
    color: "#808080",
    paddingHorizontal: 20,
    ...NONI_REG,
  },
});
