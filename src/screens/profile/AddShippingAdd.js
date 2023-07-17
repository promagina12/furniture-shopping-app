import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "react-native";

import Back from "../../assets/svg/chevronLeft.svg";
import Down from "../../assets/svg/chevronDown.svg";
import { TextInput } from "react-native";
import MainButtons from "../../components/MainButtons";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { MERRI_BOLD, NONI_REG, NONI_SEMI_BOLD } from "../../assets/theme/fonts";

const AddShippingAdd = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <Back />
        </Pressable>
        <Text style={styles.headerText}>Add shipping address</Text>
        <View />
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 27 }}>
        <View style={styles.textInput}>
          <Text style={styles.inputLabel}>Full name</Text>
          <TextInput placeholder="Ex: Bruno Pham" />
        </View>
        <View style={styles.textInput}>
          <Text style={styles.inputLabel}>Address</Text>
          <TextInput placeholder="Ex: 25 Robert Latouche Street" />
        </View>
        <View style={styles.textInput}>
          <Text style={styles.inputLabel}>Zipcode (Postal Code)</Text>
          <TextInput placeholder="Pham Cong Thanh" />
        </View>
        <View style={styles.textInput}>
          <Text style={styles.inputLabel}>Country</Text>
          <View style={{ position: "relative", justifyContent: "center" }}>
            <TextInput placeholder="Select Country" />
            <View style={{ position: "absolute", right: 20 }}>
              <Down />
            </View>
          </View>
        </View>
        <View style={styles.textInput}>
          <Text style={styles.inputLabel}>City</Text>
          <View style={{ position: "relative", justifyContent: "center" }}>
            <TextInput placeholder="New York" />
            <View style={{ position: "absolute", right: 20 }}>
              <Down />
            </View>
          </View>
        </View>
        <View style={styles.textInput}>
          <Text style={styles.inputLabel}>District</Text>
          <View style={{ position: "relative", justifyContent: "center" }}>
            <TextInput placeholder="Select District" />
            <View style={{ position: "absolute", right: 20 }}>
              <Down />
            </View>
          </View>
        </View>
        <View style={{ marginTop: 90 }}>
          <MainButtons title="SAVE ADDRESS" styles={styles.buttonText} big />
        </View>
      </View>
    </View>
  );
};

export default AddShippingAdd;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#FFFFFF",
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

  textInput: {
    backgroundColor: "#F5F5F5",
    paddingBottom: 10,
    paddingLeft: 16,
    paddingTop: 10,
    borderRadius: 8,
    marginBottom: 20,
    position: "relative",
  },

  buttonText: {
    fontSize: 20,
    color: "#FFFFFF",
    ...NONI_SEMI_BOLD,
  },

  inputLabel: {
    fontSize: 12,
    color: "#808080",
    ...NONI_REG,
  },
});
