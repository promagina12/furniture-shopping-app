import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Logo from "../../assets/svg/success.svg";
import Check from "../../assets/svg/circleCheck.svg";
import MainButtons from "../../components/MainButtons";
import ClearButton from "../../components/ClearButton";
import { StatusBar } from "react-native";
import { MERRI_BOLD, NONI_REG, NONI_SEMI_BOLD } from "../../assets/theme/fonts";

const Congrats = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <Text style={styles.success}>SUCCESS!</Text>
        <View style={styles.imageHolder}>
          <Logo />
          <View style={styles.icon}>
            <Check />
          </View>
        </View>
        <Text style={styles.text}>
          Your order will be delivered soon.{"\n"}Thank you for choosing our
          app!
        </Text>
      </View>
      <View style={styles.button1}>
        <MainButtons title="Track your orders" big styles={styles.buttonText} />
      </View>
      <View style={styles.button2}>
        <ClearButton
          title="BACK TO HOME"
          congrats
          styles={styles.buttonText2}
        />
      </View>
    </View>
  );
};

export default Congrats;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 30,
  },

  bodyContainer: {
    alignItems: "center",
    marginTop: 80,
  },

  imageHolder: {
    alignItems: "center",
    position: "relative",
  },

  icon: {
    position: "absolute",
    bottom: -20,
  },

  success: {
    fontSize: 36,
    color: "#303030",
    marginBottom: 30,
    ...MERRI_BOLD,
  },

  text: {
    fontSize: 18,
    color: "#606060",
    marginTop: 25,
    ...NONI_REG,
  },

  button1: {
    marginTop: 40,
  },

  button2: {
    marginTop: 25,
  },

  buttonText: {
    fontSize: 18,
    color: "#FFFFFF",
    ...NONI_SEMI_BOLD,
  },

  buttonText2: {
    fontSize: 18,
    color: "#303030",
    ...NONI_SEMI_BOLD,
  },
});
