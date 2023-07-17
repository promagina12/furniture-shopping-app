import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Divider = ({ chair, fav }) => {
  return (
    <View
      style={{
        borderWidth: chair ? 0.5 : 1,
        borderColor: chair ? "#BDBDBD" : "#F0F0F0",
        marginBottom: fav && 12,
      }}
    />
  );
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
});
