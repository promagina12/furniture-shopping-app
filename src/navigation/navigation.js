import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import InActiveHome from "../assets/svg/home.svg";
import ActiveHome from "../assets/svg/activeHome.svg";
import ActiveBook from "../assets/svg/activeBookmark.svg";
import InActiveBook from "../assets/svg/bookmark.svg";
import ActiveBell from "../assets/svg/activeBell.svg";
import InActiveBell from "../assets/svg/bell.svg";
import ActivePerson from "../assets/svg/activePerson.svg";
import InActivePerson from "../assets/svg/person.svg";
import Favorite from "../screens/favorites/Favorite";
import HomeNavigation from "./homeNavigation";
import Notification from "../screens/notification/Notification";
import Profile from "../screens/profile/Profile";
import ProfileNavigation from "./profileNavigation";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const NavTab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <NavTab.Screen
        name="BottomTabHome"
        component={HomeNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? <ActiveHome /> : <InActiveHome />,
        }}
      />
      <NavTab.Screen
        name="BottomTabMark"
        component={Favorite}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? <ActiveBook /> : <InActiveBook />,
        }}
      />
      <NavTab.Screen
        name="BottomTabBell"
        component={Notification}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? <ActiveBell /> : <InActiveBell />,
        }}
      />
      <NavTab.Screen
        name="BottomTabProf"
        component={ProfileNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? <ActivePerson /> : <InActivePerson />,
        }}
      />
    </NavTab.Navigator>
  );
};

export default Navigation;
