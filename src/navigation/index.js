import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "../screens/Onboarding";
import LogIn from "../screens/login/LogIn";
import SignUp from "../screens/login/SignUp";
import Navigation from "./navigation";
import ShippingAddress from "../screens/profile/ShippingAddress";
import PaymentMethod from "../screens/profile/PaymentMethod";
import MyReviews from "../screens/profile/MyReviews";
import AddShippingAdd from "../screens/profile/AddShippingAdd";
import Product from "../screens/home/Product";
import MyCart from "../screens/favorites/MyCart";
import CheckOut from "../screens/favorites/CheckOut";
import Congrats from "../screens/favorites/Congrats";
import RatingReview from "../screens/home/RatingReview";
import AddPayment from "../screens/profile/AddPayment";
import Settings from "../screens/profile/Settings";

const RootStack = createStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="Login"
        component={LogIn}
        options={{
          headerShown: false,
          gestureEnabled: true,
        }}
      />
      <RootStack.Screen
        name="Signup"
        component={SignUp}
        options={{
          headerShown: false,
          gestureEnabled: true,
        }}
      />
      <RootStack.Screen
        name="Home"
        component={Navigation}
        options={{
          headerShown: false,
          gestureEnabled: true,
        }}
      />
      <RootStack.Screen
        name="ShippingAdd"
        component={ShippingAddress}
        options={{
          headerShown: false,
        }}
      />

      <RootStack.Screen
        name="PaymentMethod"
        component={PaymentMethod}
        options={{
          headerShown: false,
        }}
      />

      <RootStack.Screen
        name="MyReviews"
        component={MyReviews}
        options={{
          headerShown: false,
        }}
      />

      <RootStack.Screen
        name="AddAddress"
        component={AddShippingAdd}
        options={{
          headerShown: false,
        }}
      />

      <RootStack.Screen
        name="Product"
        component={Product}
        options={{
          headerShown: false,
        }}
      />

      <RootStack.Screen
        name="MyCart"
        component={MyCart}
        options={{
          headerShown: false,
        }}
      />

      <RootStack.Screen
        name="CheckOut"
        component={CheckOut}
        options={{
          headerShown: false,
        }}
      />

      <RootStack.Screen
        name="Congrats"
        component={Congrats}
        options={{
          headerShown: false,
        }}
      />

      <RootStack.Screen
        name="RatingReview"
        component={RatingReview}
        options={{
          headerShown: false,
        }}
      />

      <RootStack.Screen
        name="AddPayment"
        component={AddPayment}
        options={{
          headerShown: false,
        }}
      />

      <RootStack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
