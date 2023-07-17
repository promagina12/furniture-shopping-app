import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Divider from "./Divider";
import { Pressable } from "react-native";

import Clock from "../assets/svg/clock.svg";
import { NONI_BOLD, NONI_REG, NONI_SEMI_BOLD } from "../assets/theme/fonts";

const OrderReceiptCard = ({ status }) => {
  return (
    <View style={{ backgroundColor: "#FFFFFF", borderRadius: 8 }}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerOrderNum}>Order No238562312</Text>
        <Text style={styles.headerDate}>20/03/2020</Text>
      </View>
      <Divider />
      <View>
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyText}>
            Quantity: <Text style={styles.quantityText}>03</Text>
          </Text>
          <Text style={styles.bodyText}>
            Total Amount: <Text style={styles.quantityText}>$150</Text>
          </Text>
        </View>
      </View>
      <View>
        <View style={styles.footerContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Detail</Text>
          </Pressable>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {status === "Processing" && (
              <View style={{ marginRight: 7 }}>
                <Clock />
              </View>
            )}
            {status !== "Canceled" && (
              <Text
                style={{
                  fontSize: 16,
                  color: status === "Processing" ? "#242424" : "#27AE60",
                }}
              >
                {status}
              </Text>
            )}
            {status === "Canceled" && (
              <Text
                style={{
                  fontSize: 16,
                  color: "#808080",
                }}
              >
                {status}
              </Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderReceiptCard;

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 15,
    justifyContent: "space-between",
    paddingTop: 15,
    paddingBottom: 10,
  },

  headerOrderNum: {
    fontSize: 16,
    color: "#242424",
    ...NONI_SEMI_BOLD,
  },

  headerDate: {
    fontSize: 14,
    color: "#808080",
    ...NONI_REG,
  },

  bodyContainer: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 15,
    justifyContent: "space-between",
    paddingTop: 15,
  },

  bodyText: {
    fontSize: 16,
    color: "#808080",
    ...NONI_SEMI_BOLD,
  },

  quantityText: {
    fontSize: 16,
    color: "#303030",
    ...NONI_BOLD,
  },

  footerContainer: {
    display: "flex",
    flexDirection: "row",
    paddingRight: 15,
    justifyContent: "space-between",
    paddingTop: 30,
    paddingBottom: 20,
    alignItems: "center",
  },

  button: {
    backgroundColor: "#242424",
    paddingVertical: 7,
    paddingHorizontal: 28,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },

  buttonText: {
    fontSize: 16,
    color: "#FFFFFF",
    ...NONI_BOLD,
  },
});
