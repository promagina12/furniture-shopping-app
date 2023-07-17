import { StyleSheet, Text, View, FlatList, TextInput } from "react-native";
import React from "react";
import { StatusBar } from "react-native";

import Back from "../../assets/svg/chevronLeft.svg";
import ItemCart from "../../components/ItemCart";
import ChevronR from "../../assets/svg/chevronRightWhite.svg";
import MainButtons from "../../components/MainButtons";
import { useNavigation } from "@react-navigation/native";
import {
  MERRI_BOLD,
  NONI_BOLD,
  NONI_SEMI_BOLD,
} from "../../assets/theme/fonts";

const DATA = Array.from({ length: 3 });

const MyCart = () => {
  const navigation = useNavigation();
  const renderItem = () => {
    return (
      <>
        <ItemCart cart />
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Back />
        <Text style={styles.headerText}>My Cart</Text>
        <View />
      </View>
      <FlatList data={DATA} renderItem={renderItem} style={styles.flatlist} />
      <View style={styles.footerContainer}>
        <View style={styles.promoView}>
          <TextInput
            placeholder="Enter your promo code"
            style={styles.textInput}
          />
          <View style={styles.icon}>
            <ChevronR />
          </View>
        </View>
        <View style={styles.totalView}>
          <Text style={styles.total}>Total:</Text>
          <Text style={styles.totalPrice}>$ 95.00</Text>
        </View>
        <MainButtons
          title="Check Out"
          styles={styles.buttonText}
          onPress={() => navigation.navigate("CheckOut")}
        />
      </View>
    </View>
  );
};

export default MyCart;

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
    ...MERRI_BOLD,
  },

  flatlist: {
    marginTop: 14,
  },

  footerContainer: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    paddingHorizontal: 20,
  },

  promoView: {
    position: "relative",
    justifyContent: "center",
  },

  textInput: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 11,
    paddingLeft: 20,
    width: "100%",
    borderRadius: 10,
  },

  icon: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    backgroundColor: "#303030",
    borderRadius: 10,
    position: "absolute",
    right: 0,
  },

  totalView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },

  total: {
    fontSize: 20,
    color: "#808080",
    ...NONI_BOLD,
  },

  totalPrice: {
    fontSize: 20,
    color: "#303030",
    ...NONI_BOLD,
  },

  buttonText: {
    fontSize: 20,
    color: "#FFFFFF",
    ...NONI_SEMI_BOLD,
  },
});
