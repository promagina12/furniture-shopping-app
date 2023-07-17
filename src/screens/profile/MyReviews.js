import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "react-native";

import Search from "../../assets/svg/search.svg";
import Back from "../../assets/svg/chevronLeft.svg";
import { FlatList } from "react-native";
import UserReview from "../../components/UserReview";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { MERRI_BOLD } from "../../assets/theme/fonts";

const DATA = Array.from({ length: 3 });

const MyReviews = () => {
  const navigation = useNavigation();

  const renderItem = () => {
    return (
      <View
        style={{
          marginBottom: 20,
        }}
      >
        <UserReview />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <Back />
        </Pressable>
        <Text style={styles.headerText}>My reviews</Text>
        <Search />
      </View>
      <FlatList data={DATA} renderItem={renderItem} style={styles.flatList} />
    </View>
  );
};

export default MyReviews;

const styles = StyleSheet.create({
  container: {
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

  flatList: {
    marginTop: 17,
    paddingHorizontal: 20,
  },
});
