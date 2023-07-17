import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "react-native";

import Back from "../../assets/svg/chevronLeft.svg";
import Pen from "../../assets/svg/pen.svg";
import Right from "../../assets/svg/chevronRight.svg";
import { Pressable } from "react-native";
import { TextInput } from "react-native";
import { Switch } from "react-native-gesture-handler";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  MERRI_BOLD,
  NONI_BOLD,
  NONI_REG,
  NONI_SEMI_BOLD,
} from "../../assets/theme/fonts";

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <Back />
        </Pressable>
        <Text style={styles.headerText}>Settings</Text>
        <View />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.bodyContainer}
      >
        <View style={{ marginTop: 22 }}>
          <View style={styles.titleHolder}>
            <Text style={styles.title}>Personal Information</Text>
            <Pen />
          </View>
          <View style={styles.textInput}>
            <Text style={styles.perInfo}>Name</Text>
            <TextInput placeholder="Bruno Pham" style={styles.persoInput} />
          </View>
          <View style={styles.textInput}>
            <Text style={styles.perInfo}>Email</Text>
            <TextInput
              placeholder="bruno203@gmail.com"
              style={styles.persoInput}
            />
          </View>
        </View>
        <View style={{ marginTop: 40 }}>
          <View style={styles.titleHolder}>
            <Text style={styles.title}>Password</Text>
            <Pen />
          </View>
          <View style={styles.textInput}>
            <Text style={styles.perInfo}>Password</Text>
            <TextInput
              placeholder="***************"
              style={styles.persoInput}
            />
          </View>
        </View>
        <View style={{ marginTop: 35 }}>
          <Text style={styles.title}>Notifications</Text>
          <View style={styles.switchContainer}>
            <Text style={styles.notifText}>Sales</Text>
            <Switch />
          </View>
          <View style={styles.switchContainer}>
            <Text style={styles.notifText}>New arrivals</Text>
            <Switch />
          </View>
          <View style={styles.switchContainer}>
            <Text style={styles.notifText}>Delivery status changes</Text>
            <Switch />
          </View>
        </View>
        <View style={{ marginTop: 35, paddingBottom: 20 }}>
          <Text style={styles.title}>Help Center</Text>
          <View style={styles.switchContainer}>
            <Text style={styles.helpCenterText}>FAQ</Text>
            <Right />
          </View>
          <View style={styles.switchContainer}>
            <Text style={styles.helpCenterText}>Contact Us</Text>
            <Right />
          </View>
          <View style={styles.switchContainer}>
            <Text style={styles.helpCenterText}>Privacy & Terms</Text>
            <Right />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  headerText: {
    fontSize: 16,
    color: "#303030",
    ...MERRI_BOLD,
  },

  bodyContainer: {
    paddingHorizontal: 20,
  },

  titleHolder: {
    flexDirection: "row",
    alightItems: "center",
    justifyContent: "space-between",
  },

  textInput: {
    backgroundColor: "#FFFFFF",
    paddingBottom: 10,
    paddingLeft: 16,
    paddingTop: 10,
    borderRadius: 8,
    marginBottom: 20,
    position: "relative",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  switchContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 17,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 10,
  },

  title: {
    fontSize: 16,
    color: "#909191",
    marginBottom: 15,
    ...NONI_SEMI_BOLD,
  },

  perInfo: {
    fontSize: 12,
    color: "#808080",
    ...NONI_REG,
  },

  persoInput: {
    color: "#242424",
    fontSize: 14,
  },

  notifText: {
    color: "#242424",
    fontSize: 16,
    fontFamily: "NunitoSans_600SemiBold",
  },

  helpCenterText: {
    color: "#242424",
    fontSize: 16,
    ...NONI_BOLD,
  },
});
