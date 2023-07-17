import { StyleSheet, Text, View } from "react-native";
import React from "react";

import BackGroundImg from "../assets/svg/onboarding.svg";
import MainButtons from "../components/MainButtons";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GELAS_BOLD, GELAS_SEMI_BOLD, NONI_REG } from "../assets/theme/fonts";

const Onboarding = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.backgroundView}>
        <BackGroundImg />
      </View>
      <View style={styles.textView}>
        <Text style={styles.first}>MAKE YOUR</Text>
        <Text style={styles.second}>HOME BEAUTIFUL</Text>
        <Text style={styles.third}>
          The best simple place where you discover most wonderful furnitures
          {"\n"}and make your home beautiful
        </Text>

        <View style={styles.buttonView}>
          <MainButtons
            title="Get Started"
            styles={styles.button}
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },

  backgroundView: {
    position: "absolute",
    right: 0,
  },

  textView: {
    marginTop: 231,
    paddingHorizontal: 30,
  },

  first: {
    ...GELAS_SEMI_BOLD,
    fontSize: 24,
    color: "#606060",
  },

  second: {
    ...GELAS_BOLD,
    fontSize: 30,
    color: "#303030",
    marginTop: 15,
  },

  third: {
    fontSize: 18,
    color: "#808080",
    paddingLeft: 29,
    marginTop: 35,
    ...NONI_REG,
  },

  buttonView: {
    paddingHorizontal: 78,
    marginTop: 200,
  },

  button: {
    color: "#FFFFFF",
    fontSize: 18,
    ...GELAS_SEMI_BOLD
  },
});
