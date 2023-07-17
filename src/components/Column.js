import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

import Chevron from "../assets/svg/chevronRight.svg";
import { NONI_BOLD, NONI_REG } from "../assets/theme/fonts";

const Column = ({ description, title, desc, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.textcontainer}>
        <Text style={styles.title1}>{title}</Text>
        {description && <Text style={styles.desc}>{desc}</Text>}
      </View>
      <Chevron />
    </Pressable>
  );
};

export default Column;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 18,
    paddingLeft: 20,
    paddingRight: 10,
    marginBottom: 15,
  },

  title1: {
    fontSize: 18,
    color: "#242424",
    ...NONI_BOLD,
  },

  desc: {
    fontSize: 12,
    color: "#808080",
    ...NONI_REG,
  },
});
