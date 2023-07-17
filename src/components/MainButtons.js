import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Pressable } from "react-native";

const MainButtons = ({ title, onPress, disabled, styles, big }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: disabled ? "#999999" : "#242424",
        paddingVertical: big ? 16 : 13,
        borderRadius: 8,
        alignItems: "center",
      }}
    >
      <Text style={styles}>{title}</Text>
    </Pressable>
  );
};

export default MainButtons;

const styles = StyleSheet.create({});
