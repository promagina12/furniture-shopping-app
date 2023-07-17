import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Rating from "../assets/svg/rating.svg";
import Profile from "../assets/svg/profile.svg";
import { NONI_REG, NONI_SEMI_BOLD } from "../assets/theme/fonts";

const ShopReview = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Profile />
      </View>
      <View>
        <View style={styles.ratingHolder}>
          <Text style={styles.userName}>Bruno Fernandes</Text>
          <Text style={styles.date}>20/03/2020</Text>
        </View>
        <Rating />
        <Text style={styles.description}>
          Nice Furniture with good delivery. The delivery time is very fast.
          Then products look like exactly the picture in the app. Besides, color
          is also the same and quality is very good despite very cheap price
        </Text>
      </View>
    </View>
  );
};

export default ShopReview;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 16,
    position: "relative",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginTop: 20,
  },

  profile: {
    position: "absolute",
    top: -20,
  },

  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    marginLeft: 20,
  },

  userName: {
    fontSize: 14,
    color: "#242424",
    ...NONI_SEMI_BOLD,
  },

  ratingHolder: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },

  date: {
    fontSize: 12,
    color: "#808080",
    ...NONI_REG,
  },

  description: {
    fontSize: 14,
    color: "#242424",
    marginTop: 15,
    ...NONI_REG,
  },
});
