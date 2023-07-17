import { StyleSheet, Text, View } from "react-native";
import React from "react";

import CoffeeTable from "../assets/svg/coffeTable.svg";
import Rating from "../assets/svg/rating.svg";
import {
  NONI_EXTRA_BOLD,
  NONI_REG,
  NONI_SEMI_BOLD,
} from "../assets/theme/fonts";

const UserReview = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <CoffeeTable />
        <View style={styles.title}>
          <Text style={styles.shopItem}>CoffeeTable</Text>
          <Text style={styles.shopPrice}>$ 50.00</Text>
        </View>
      </View>
      <View style={styles.ratingHolder}>
        <Rating />
        <Text style={styles.ratingText}>20/03/2020</Text>
      </View>
      <Text style={styles.description}>
        Nice Furniture with good delivery. The delivery time is very fast. Then
        products look like exactly the picture in the app. Besides, color is
        also the same and quality is very good despite very cheap price
      </Text>
    </View>
  );
};

export default UserReview;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 16,
  },

  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    marginLeft: 20,
  },

  shopItem: {
    fontSize: 16,
    color: "#606060",
    ...NONI_SEMI_BOLD,
  },

  shopPrice: {
    fontSize: 16,
    color: "#242424",
    ...NONI_EXTRA_BOLD,
  },

  ratingHolder: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
    justifyContent: "space-between",
  },

  ratingText: {
    fontSize: 12,
    color: "#808080",
    ...NONI_REG,
  },

  description: {
    fontSize: 14,
    color: "#242424",
    ...NONI_REG,
  },
});
