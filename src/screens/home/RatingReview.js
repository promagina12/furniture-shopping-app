import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Pressable,
} from "react-native";
import React from "react";

import Back from "../../assets/svg/chevronLeft.svg";
import Star from "../../assets/svg/singleStar.svg";
import ShopReview from "../../components/ShopReview";
import { FlatList } from "react-native";
import MainButtons from "../../components/MainButtons";
import { useNavigation } from "@react-navigation/native";
import {
  MERRI_BOLD,
  NONI_BOLD,
  NONI_REG,
  NONI_SEMI_BOLD,
} from "../../assets/theme/fonts";

const DATA = Array.from({ length: 4 });

const RatingReview = () => {
  const navigation = useNavigation();

  const renderItem = () => {
    return (
      <View style={{ marginBottom: 20 }}>
        <ShopReview />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <Back />
        </Pressable>
        <Text style={styles.headerText}>Rating & Review</Text>
        <View />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.bodyHeaderContainer}>
          <Image
            source={require("../../assets/img/MaskGroup.png")}
            style={styles.img}
          />
          <View style={{ marginLeft: 20 }}>
            <Text style={styles.itemName}>Minimal Stand</Text>
            <View style={styles.ratingHolder}>
              <Star />
              <Text style={styles.rating}>4.5</Text>
            </View>
            <Text style={styles.review}>10 reviews</Text>
          </View>
        </View>
        <FlatList
          renderItem={renderItem}
          data={DATA}
          showsVerticalScrollIndicator={false}
          style={{ paddingTop: 15 }}
        />
      </View>
      <View style={styles.button}>
        <MainButtons title="Write a review" styles={styles.buttonText} />
      </View>
    </View>
  );
};

export default RatingReview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    position: "relative",
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  headerText: {
    fontSize: 16,
    color: "#303030",
    ...MERRI_BOLD,
  },

  bodyContainer: {
    paddingHorizontal: 20,
  },

  bodyHeaderContainer: {
    flexDirection: "row",
    borderBottomColor: "#DBDBDB",
    borderBottomWidth: 1,
    paddingBottom: 15,
    paddingTop: 19,
  },

  itemName: {
    fontSize: 16,
    color: "#242424",
    ...NONI_REG,
  },

  rating: {
    fontSize: 24,
    color: "#303030",
    ...NONI_BOLD,
    marginLeft: 10,
  },

  review: {
    fontSize: 18,
    color: "#303030",
    ...NONI_SEMI_BOLD,
  },

  ratingHolder: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 13,
  },

  button: {
    position: "absolute",
    bottom: 35,
    width: "90%",
    marginHorizontal: 20,
  },

  buttonText: {
    fontSize: 18,
    color: "#FFFFFF",
    ...NONI_BOLD,
  },
});
