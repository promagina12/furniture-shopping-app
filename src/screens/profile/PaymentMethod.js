import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "react-native";

import Back from "../../assets/svg/chevronLeft.svg";
import MasterCard from "../../assets/svg/card.svg";
import VisaCard from "../../assets/svg/visaCard.svg";
import { Image } from "react-native";
import Checkbox from "expo-checkbox";
import Plus from "../../assets/svg/plus.svg";
import { useNavigation } from "@react-navigation/native";
import { MERRI_BOLD, NONI_REG } from "../../assets/theme/fonts";

const PaymentMethod = () => {
  const navigation = useNavigation();
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <Back />
        </Pressable>
        <Text style={styles.headerText}>Payment Method</Text>
        <View />
      </View>

      <View style={{ alignItems: "center" }}>
        <View>
          <Image source={require("../../assets/img/Paymentcard.png")} />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 30,
              paddingHorizontal: 20,
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
                ...NONI_REG,
                color: isChecked ? "#242424" : "#999999",
              }}
            >
              Use as the shipping address
            </Text>
          </View>
        </View>
        <View>
          <Image source={require("../../assets/img/VisaPaymentcard.png")} />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
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
              }}
            >
              Use as the shipping address
            </Text>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.fabButton}
        onPress={() => navigation.navigate("AddPayment")}
      >
        <Plus />
      </Pressable>
    </View>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
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
    ...MERRI_BOLD
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
