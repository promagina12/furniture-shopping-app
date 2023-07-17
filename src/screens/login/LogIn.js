import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Divider from "../../components/Divider";

import CircleChair from "../../assets/svg/circleChair.svg";
import Rectangle from "../../assets/svg/rectangle.svg";
import MainButtons from "../../components/MainButtons";
import Eye from "../../assets/svg/eye.svg";
import ClearButton from "../../components/ClearButton";
import { useNavigation } from "@react-navigation/native";
import {
  MERRI_BOLD,
  MERRI_REG,
  NONI_SEMI_BOLD,
} from "../../assets/theme/fonts";

const LogIn = () => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar style="auto" hidden={false} />
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Rectangle />
          <View style={styles.chair}>
            <CircleChair />
          </View>
          <Rectangle />
        </View>
        <View style={styles.firstTextView}>
          <Text style={styles.text1}>Hello !</Text>
          <Text style={styles.text2}>WELCOME BACK</Text>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.inputView}>
            <TextInput placeholder="Email" style={styles.emailInput} />
            <View style={styles.passInputHolder}>
              <TextInput placeholder="Password" style={styles.passInput} />
              <View style={styles.iconHolder}>
                <Eye />
              </View>
            </View>
          </View>
          <View style={styles.footerView}>
            <ClearButton
              title="Forgot Password"
              styles={styles.forgotPassText}
            />
            <View style={{ width: "100%", marginTop: 40 }}>
              <MainButtons
                title="Log in"
                styles={styles.buttonText}
                onPress={() => navigation.navigate("Home")}
              />
            </View>
            <ClearButton
              title="SIGN UP"
              styles={styles.signupText}
              onPress={() => navigation.navigate("Signup")}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
    marginTop: 83,
    paddingRight: 30,
  },

  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
    paddingLeft: 30,
  },

  chair: {
    position: "absolute",
    right: 133,
    top: -30,
  },

  firstTextView: {
    marginTop: 62,
    paddingHorizontal: 30,
  },

  text1: {
    fontSize: 30,
    color: "#909090",
    ...MERRI_REG,
  },

  text2: {
    fontSize: 24,
    color: "#303030",
    marginTop: 10,
    ...MERRI_BOLD,
  },

  bodyContainer: {
    marginTop: 25,
    borderWidth: 0.1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },

  inputView: {
    paddingLeft: 30,
  },

  emailInput: {
    borderBottomWidth: 1,
    paddingTop: 35,
    paddingBottom: 40,
    borderBottomColor: "#E0E0E0",
  },

  passInputHolder: {
    position: "relative",
  },

  iconHolder: {
    position: "absolute",
    right: 25,
    bottom: 10,
  },

  passInput: {
    borderBottomWidth: 1,
    paddingTop: 35,
    paddingBottom: 40,
    borderBottomColor: "#E0E0E0",
  },

  footerView: {
    marginTop: 35,
    alignItems: "center",
    paddingHorizontal: 30,
  },

  forgotPassText: {
    fontSize: 18,
    color: "#303030",
    ...NONI_SEMI_BOLD,
  },

  buttonText: {
    fontSize: 18,
    color: "#FFFFFF",
    ...NONI_SEMI_BOLD,
  },

  signupText: {
    marginTop: 30,
    marginBottom: 40,
    fontSize: 18,

    color: "#303030",
    ...NONI_SEMI_BOLD,
  },
});
