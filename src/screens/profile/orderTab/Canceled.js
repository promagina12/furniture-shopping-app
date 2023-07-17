import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import OrderReceiptCard from "../../../components/OrderReceiptCard";

const DATA = Array.from({ length: 4 });

const Canceled = () => {
  const renderItem = () => {
    return (
      <View style={{ marginBottom: 25 }}>
        <OrderReceiptCard status="Canceled" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        style={styles.flatlist}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Canceled;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#E5E5E5",
  },

  flatlist: {
    marginTop: 25,
  },
});
