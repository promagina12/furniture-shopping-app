import { SectionList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "react-native";

import Stand from "../../assets/svg/minimalStand.svg";
import Search from "../../assets/svg/search.svg";
import Column from "../../components/Column";
import { FlatList } from "react-native";
import Divider from "../../components/Divider";
import { Image } from "react-native";
import NotificationCompo from "../../components/NotificationCompo";
import { MERRI_BOLD } from "../../assets/theme/fonts";

const DATA = Array.from({ length: 10 });

const Notification = () => {
  const renderItem = () => {
    return (
      <NotificationCompo
        adds
        pr
        m
        t
        text="Hot!"
        title="Discover hot sale furnitures this week."
        decs="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. "
      />
    );
  };

  const renderOrderItem = () => {
    return (
      <NotificationCompo
        img
        n
        title="Your order #123456789 has been confirmed"
        decs="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
            pretium et in arcu adipiscing nec. Turpis pretium et in arcu
            adipiscing nec."
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Search />
        <Text style={styles.headerText}>Notification</Text>
        <View />
      </View>
      <FlatList
        style={{ flexWrap: "nowrap" }}
        data={DATA}
        showsVerticalScrollIndicator={false}
        renderItem={({ index }) =>
          index === 1 ? renderItem() : renderOrderItem()
        }
        ListHeaderComponent={() => (
          <NotificationCompo
            img
            bg
            f
            n
            t
            text="New"
            title="Your order #123456789 has been confirmed"
            decs="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. "
          />
        )}
      />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#FFFFFF",
  },

  headerContainer: {
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

  viewContainer: {
    flexDirection: "row",
    paddingVertical: 7,
  },

  viewContainer1: {
    flexDirection: "row",
    paddingVertical: 15,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
  },

  orderItem: {
    marginLeft: 10,
    flex: 1,
  },

  advContainer: {
    backgroundColor: "#F0F0F0",
  },
});
