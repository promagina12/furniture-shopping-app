import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Back from "../../assets/svg/chevronLeft.svg";
import { Pressable } from "react-native";
import { Image } from "react-native";
import { TextInput } from "react-native";
import MainButtons from "../../components/MainButtons";
import { MERRI_BOLD, NONI_REG, NONI_SEMI_BOLD } from "../../assets/theme/fonts";

const AddPayment = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <Back />
        </Pressable>
        <Text style={styles.headerText}>AddPayment</Text>
        <View />
      </View>
      <View style={styles.bodyContainer}>
        <Image source={require("../../assets/img/addPaymentCard.png")} />
        <View style={styles.textInput}>
          <Text style={styles.inputLabel}>CardHolder Name</Text>
          <TextInput placeholder="Ex: Bruno Pham" />
        </View>
        <View style={styles.textInput}>
          <Text style={styles.inputLabel}>Card Number</Text>
          <TextInput placeholder="**** **** **** 3456" />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={styles.textInput1}>
            <Text style={styles.inputLabel}>CVV</Text>
            <TextInput placeholder="Ex: 123" />
          </View>
          <View style={styles.textInput2}>
            <Text style={styles.inputLabel}>Expiration Date</Text>
            <TextInput placeholder="03/22" />
          </View>
        </View>
        <View style={{ marginTop: 155 }}>
          <MainButtons title="ADD NEW CARD" big styles={styles.buttonText} />
        </View>
      </View>
    </View>
  );
};

export default AddPayment;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#FFFFFF",
    flex: 1,
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  bodyContainer: {
    marginHorizontal: 20,
    marginTop: 22,
  },

  textInput: {
    backgroundColor: "#F5F5F5",
    paddingBottom: 10,
    paddingLeft: 16,
    paddingTop: 10,
    borderRadius: 8,
    marginBottom: 20,
    position: "relative",
  },

  textInput1: {
    backgroundColor: "#F5F5F5",
    paddingBottom: 10,
    paddingLeft: 16,
    paddingTop: 10,
    borderRadius: 8,
    marginBottom: 20,
    position: "relative",
    width: "47%",
  },

  textInput2: {
    backgroundColor: "#F5F5F5",
    paddingBottom: 10,
    paddingLeft: 16,
    paddingTop: 10,
    borderRadius: 8,
    marginBottom: 20,
    position: "relative",
    width: "47%",
  },

  buttonText: {
    fontSize: 20,
    color: "#FFFFFF",
    ...NONI_SEMI_BOLD,
  },

  headerText: {
    fontSize: 16,
    color: "#303030",
    ...MERRI_BOLD,
  },

  inputLabel: {
    fontSize: 14,
    color: "#808080",
    ...NONI_REG,
  },
});
