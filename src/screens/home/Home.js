import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import { FlatList } from "react-native";

import Search from "../../assets/svg/search.svg";
import Cart from "../../assets/svg/shoppingCart.svg";
import Star from "../../assets/svg/star.svg";
import Img from "../../assets/svg/itemLamp.svg";
import ShopBag from "../../assets/svg/bagActive.svg";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  GELAS_BOLD,
  GELAS_REG,
  NONI_BOLD,
  NONI_REG,
  NONI_SEMI_BOLD,
} from "../../assets/theme/fonts";

const DATA = Array.from({ length: 6 });

const Home = () => {
  const navigation = useNavigation();

  const renderTopItem = () => {
    return (
      <View
        style={{
          alignItems: "center",
          marginRight: 25,
          marginVertical: 20,
        }}
      >
        <View
          style={{ backgroundColor: "#303030", padding: 12, borderRadius: 12 }}
        >
          <Star />
        </View>
        <Text style={styles.text1}>Popular</Text>
      </View>
    );
  };

  const renderShopItem = () => {
    return (
      <Pressable
        style={{ marginRight: 35, marginBottom: 15 }}
        onPress={() => navigation.navigate("Product")}
      >
        <View style={{ position: "relative" }}>
          <Img />
          <View style={{ position: "absolute", bottom: 15, right: 15 }}>
            <ShopBag />
          </View>
        </View>
        <Text style={styles.text2}>Black Simple Lamp</Text>
        <Text style={styles.text3}>$ 12.00</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Search />
        <View style={{ alignItems: "center" }}>
          <Text style={styles.makeHome}>Make Home</Text>
          <Text style={styles.beautiful}>BEAUTIFUL</Text>
        </View>
        <Cart />
      </View>
      <View>
        <FlatList
          data={DATA}
          renderItem={renderTopItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View>
        <FlatList
          data={DATA}
          renderItem={renderShopItem}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    height: "100%",
    paddingHorizontal: 20,
    paddingBottom: 170,
    flex: 1,
  },

  headerContainer: {
    paddingTop: StatusBar.currentHeight,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  text1: {
    fontSize: 14,
    color: "#242424",
    ...NONI_SEMI_BOLD,
  },

  text2: {
    fontSize: 14,
    color: "#606060",
    ...NONI_REG,
    marginTop: 10,
  },

  text3: {
    fontSize: 14,
    color: "#303030",
    ...NONI_BOLD,
  },

  makeHome: {
    fontSize: 14,
    color: "#909090",
    ...GELAS_REG,
  },

  beautiful: {
    fontSize: 18,
    color: "#242424",
    ...GELAS_BOLD,
  },
});
