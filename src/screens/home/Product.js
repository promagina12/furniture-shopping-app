import { StatusBar, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";

import Back from "../../assets/svg/chevronLeft.svg";
import Circle1 from "../../assets/svg/circle1.svg";
import Circle2 from "../../assets/svg/circle2.svg";
import Circle3 from "../../assets/svg/circle3.svg";
import Star from "../../assets/svg/singleStar.svg";
import BookMark from "../../assets/svg/bigBookmark.svg";
import Minus from "../../assets/svg/minus.svg";
import Plus from "../../assets/svg/stepperPlus.svg";
import MainButtons from "../../components/MainButtons";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import {
  GELAS_MED,
  NONI_BOLD,
  NONI_LIGHT,
  NONI_SEMI_BOLD,
} from "../../assets/theme/fonts";

const Product = () => {
  const navigation = useNavigation();

  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <View>
            <Image
              source={require("../../assets/img/MiniStand.png")}
              style={styles.img}
            />
          </View>
          <View style={styles.floatContainer}>
            <Pressable
              onPress={() => navigation.goBack()}
              style={styles.backButton}
            >
              <Back />
            </Pressable>
            <View style={styles.circleHolder}>
              <Circle1 />
              <View style={styles.circleView}>
                <Circle2 />
              </View>
              <Circle3 />
            </View>
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>Minimal Stand</Text>
          <View style={styles.priceHolder}>
            <Text style={styles.price}>$ 50</Text>
            <View style={styles.numericStepper}>
              <View style={styles.plus}>
                <Plus />
              </View>
              <Text style={styles.value}>01</Text>
              <View style={styles.minus}>
                <Minus />
              </View>
            </View>
          </View>
          <View style={styles.reviewView}>
            <Star />
            <Text style={styles.rating}>4.5</Text>
            <Pressable onPress={() => navigation.navigate("RatingReview")}>
              <Text style={styles.review}>(50 reviews)</Text>
            </Pressable>
          </View>
          <Text style={styles.desc}>
            Minimal Stand is made of by natural wood. The design that is very
            simple and minimal. This is truly one of the best furnitures in any
            family for now. With 3 different colors, you can easily select the
            best match for your home.
          </Text>
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <View style={styles.iconHolder}>
          <BookMark />
        </View>
        <View style={styles.buttonHolder}>
          <MainButtons title="Add to cart" big styles={styles.buttonText} />
        </View>
      </View>
    </>
  );
};

export default Product;

const styles = StyleSheet.create({
  headerContainer: {
    position: "relative",
  },

  img: {
    borderBottomLeftRadius: 60,
    position: "absolute",
    right: 0,
    width: "86%",
  },

  backButton: {
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 6,
    // width: 40,
    marginTop: StatusBar.currentHeight,
  },

  circleHolder: {
    padding: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 40,
    // width: 64,
    marginTop: 56,
  },

  circleView: {
    marginVertical: 30,
  },

  floatContainer: {
    alignItems: "center",
    position: "absolute",
    left: 25,
    top: 9,
    display: "flex",
  },

  bodyContainer: {
    marginTop: 480,
    paddingHorizontal: 25,
  },

  priceHolder: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  numericStepper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  reviewView: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 11,
    alignItems: "center",
  },

  footerContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 21,
    alignItems: "center",
    paddingHorizontal: 25,
    marginBottom: 30,
  },

  iconHolder: {
    padding: 18,
    backgroundColor: "#E5E5E5",
    borderRadius: 8,
  },

  buttonHolder: {
    width: "78%",
    marginLeft: 15,
  },

  buttonText: {
    fontSize: 20,
    color: "#FFFFFF",
    ...NONI_SEMI_BOLD,
  },

  title: {
    fontSize: 24,
    color: "#303030",
    ...GELAS_MED,
  },

  price: {
    fontSize: 30,
    color: "#303030",
    ...NONI_BOLD,
  },

  rating: {
    fontSize: 18,
    color: "#303030",
    marginLeft: 10,
    ...NONI_BOLD,
  },

  review: {
    fontSize: 14,
    color: "#808080",
    marginLeft: 20,
    ...NONI_SEMI_BOLD,
  },

  desc: {
    fontSize: 14,
    color: "#606060",
    ...NONI_LIGHT,
  },

  plus: {
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#E5E5E5",
  },

  value: {
    fontSize: 18,
    color: "#242424",
    marginHorizontal: 15,
    ...NONI_SEMI_BOLD,
  },

  minus: {
    paddingHorizontal: 8,
    paddingVertical: 14,
    borderRadius: 6,
    backgroundColor: "#E5E5E5",
  },
});
