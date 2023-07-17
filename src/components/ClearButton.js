import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const ClearButton = ({ styles, title, onPress, congrats }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        alignItems: congrats && "center",
        borderWidth: congrats && 1,
        paddingVertical: congrats && 16,
        borderRadius: congrats && 8,
      }}
    >
      <Text style={styles}>{title}</Text>
    </Pressable>
  );
};

export default ClearButton;

const styles = StyleSheet.create({});
