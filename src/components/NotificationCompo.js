import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { NONI_BOLD, NONI_EXTRA_BOLD, NONI_REG } from "../assets/theme/fonts";

const NotificationCompo = ({
  title,
  img,
  decs,
  bg,
  pr,
  adds,
  m,
  f,
  t,
  n,
  text,
}) => {
  return (
    <View
      style={{
        backgroundColor: bg && "#F5F5F5",
        paddingLeft: 20,
        paddingRight: pr ? 0 : 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          paddingTop: f ? 15 : 10,
          paddingBottom: f ? 15 : 10,
          backgroundColor: adds && "#F5F5F5",
          borderBottomColor: "#F0F0F0",
          borderBottomWidth: m ? 0 : 1,
        }}
      >
        {img && <Image source={require("../assets/img/drawer.png")} />}
        <View style={{ marginLeft: 10, flex: 1, position: "relative" }}>
          <Text
            style={{
              fontSize: m ? 14 : 13,
              color: "#242424",
              ...NONI_BOLD,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "normal",
              color: "#808080",
              paddingBottom: m && 21,
              ...NONI_REG,
            }}
          >
            {decs}
          </Text>
          {t && (
            <Text
              style={{
                fontSize: 14,
                color: n ? "#27AE60" : "#EB5757",
                position: "absolute",
                bottom: 0,
                right: n ? 0 : 20,
                ...NONI_EXTRA_BOLD,
              }}
            >
              {text}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default NotificationCompo;
