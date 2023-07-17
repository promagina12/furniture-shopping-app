import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "react-native";

import Back from "../../assets/svg/chevronLeft.svg";
import Pen from "../../assets/svg/pen.svg";
import ShippingAddressCard from "../../components/ShippingAddressCard";
import Method from "../../components/Method";
import MainButtons from "../../components/MainButtons";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { MERRI_BOLD, NONI_REG, NONI_SEMI_BOLD } from "../../assets/theme/fonts";

const CheckOut = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <Back />
        </Pressable>
        <Text style={styles.headerText}>Check Out</Text>
        <View />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.shippingHolder}>
          <Text style={styles.shippingText}>Shipping Address</Text>
          <Pen />
        </View>
        <ShippingAddressCard checkOut />

        <View style={styles.methodContainer}>
          <Method payment method="Payment" text="**** **** **** 3947" />
        </View>
        <Method method="Delivery method" text="Fast (2-3days)" />
        <View style={styles.totalHolder}>
          <View style={styles.textHolder}>
            <Text style={styles.total}>Order:</Text>
            <Text style={styles.totalAmm}>$ 95.00</Text>
          </View>
          <View style={styles.textHolder}>
            <Text style={styles.total}>Delivery:</Text>
            <Text style={styles.totalAmm}>$ 5.00</Text>
          </View>
          <View style={styles.textHolder2}>
            <Text style={styles.total}>Total:</Text>
            <Text style={styles.totalAmm}>$ 100.00</Text>
          </View>
        </View>
        <MainButtons
          title="SUBMIT ORDER"
          styles={styles.buttonText}
          onPress={() => navigation.navigate("Congrats")}
        />
      </View>
    </View>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
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

  bodyContainer: {
    paddingHorizontal: 20,
  },

  shippingHolder: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  shippingText: {
    fontSize: 18,
    color: "#909090",
    ...NONI_SEMI_BOLD,
  },

  methodContainer: {
    marginBottom: 32,
    marginTop: 30,
  },

  textHolder: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 15,
  },

  textHolder2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
  },

  totalHolder: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    marginTop: 38,
    paddingHorizontal: 20,
    marginBottom: 25,
  },

  buttonText: {
    fontSize: 20,
    color: "#FFFFFF",
    ...NONI_SEMI_BOLD,
  },

  total: {
    fontSize: 18,
    color: "#808080",
    ...NONI_REG,
  },

  totalAmm: {
    fontSize: 18,
    color: "#242424",
    ...NONI_SEMI_BOLD,
  },
});
