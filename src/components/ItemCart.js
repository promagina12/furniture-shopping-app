import { Text, View } from "react-native";
import React, { useState } from "react";

import Table from "../assets/svg/favCoffeTable.svg";
import Close from "../assets/svg/close.svg";
import Bag from "../assets/svg/bagInActive.svg";
import Plus from "../assets/svg/cartPlus.svg";
import Minus from "../assets/svg/cartMinus.svg";
import Divider from "./Divider";
import { NONI_BOLD, NONI_SEMI_BOLD } from "../assets/theme/fonts";

const ItemCart = ({ fav, cart }) => {
  return (
    <View style={{ marginHorizontal: 20 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Table />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: 14, color: "#606060", ...NONI_SEMI_BOLD }}>
              Coffee Table
            </Text>
            <Text
              style={{
                marginTop: 5,
                fontSize: 16,
                color: "#303030",
                ...NONI_BOLD,
              }}
            >
              $ 50.00
            </Text>
            {cart && (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 23,
                }}
              >
                <View
                  style={{
                    padding: 8,
                    borderRadius: 6,
                    backgroundColor: "#E5E5E5",
                  }}
                >
                  <Plus />
                </View>
                <Text
                  style={{
                    fontSize: 18,
                    color: "#242424",
                    marginHorizontal: 15,
                    ...NONI_SEMI_BOLD,
                  }}
                >
                  01
                </Text>
                <View
                  style={{
                    paddingHorizontal: 8,
                    paddingVertical: 14,
                    borderRadius: 6,
                    backgroundColor: "#E5E5E5",
                  }}
                >
                  <Minus />
                </View>
              </View>
            )}
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Close />
          {fav && (
            <View style={{ marginTop: 41 }}>
              <Bag />
            </View>
          )}
        </View>
      </View>
      <Divider fav chair />
    </View>
  );
};

export default ItemCart;
