import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "react-native";

import Search from "../../assets/svg/search.svg";
import Cart from "../../assets/svg/shoppingCart.svg";
import Table from "../../assets/svg/favCoffeTable.svg";
import { FlatList } from "react-native-gesture-handler";
import MainButtons from "../../components/MainButtons";
import ItemCart from "../../components/ItemCart";
import { useNavigation } from "@react-navigation/native";
import { MERRI_BOLD, NONI_SEMI_BOLD } from "../../assets/theme/fonts";

const DATA = Array.from({ length: 10 });

const Favorite = () => {
  const navigation = useNavigation();

  const renderItems = () => {
    return (
      <>
        <ItemCart fav />
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Search />
        <Text style={styles.headerText}>Favorites</Text>
        <Cart />
      </View>
      <FlatList
        style={styles.flatlistView}
        data={DATA}
        renderItem={renderItems}
      />
      <View style={styles.buttonView}>
        <MainButtons
          title="Add all to my cart"
          styles={styles.buttonText}
          onPress={() => navigation.navigate("MyCart")}
        />
      </View>
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    position: "relative",
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

  flatlistView: {
    paddingTop: 18,
    flex: 1,
  },

  buttonView: {
    position: "absolute",
    bottom: 20,
    right: 0,
    width: "100%",
    paddingHorizontal: 20,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "400",
    color: "#FFFFFF",
    ...NONI_SEMI_BOLD,
  },
});
