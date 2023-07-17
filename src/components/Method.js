import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Pen from "../assets/svg/pen.svg";
import MasterCard from "../assets/svg/masterCard.svg";
import Dhl from "../assets/svg/dhl.svg";
import { NONI_SEMI_BOLD } from "../assets/theme/fonts";

const Method = ({ method, text, payment }) => {
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "#909090",
            ...NONI_SEMI_BOLD,
          }}
        >
          {method}
        </Text>
        <Pen />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          borderRadius: 8,
          paddingVertical: 15,
          paddingLeft: 20,
          marginTop: 19,
        }}
      >
        {payment ? (
          <View
            style={{
              paddingVertical: 7,
              paddingHorizontal: 16,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,

              elevation: 2,
              backgroundColor: "#FFFFFF",
              borderRadius: 8,
            }}
          >
            <MasterCard />
          </View>
        ) : (
          <Dhl />
        )}
        <Text
          style={{
            marginLeft: 17,
            fontSize: 14,
            color: "#242424",
            ...NONI_SEMI_BOLD,
          }}
        >
          {text}
        </Text>
      </View>
    </View>
  );
};

export default Method;

const styles = StyleSheet.create({});
