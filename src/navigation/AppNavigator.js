import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { themeColor, useTheme } from "react-native-rapi-ui";
import TabBarIcon from "../share/TabBarIcon";
import TabBarText from "../share/TabBarText";

import SecondScreen from "../screens/public/SecondScreen";
import Game from "../screens/public/Game";
import Profile from "../screens/admin/Profile";
import Job from "../screens/admin/Job";
import HomeP from "../screens/public/HomeP";
import Home from "../screens/admin/Home";
import CreateCompany from "../screens/admin/CreateCompany";
import CreateQA from "../screens/admin/CreateQA";
import EditQA from "../screens/admin/EditQA";


const MainStack = createNativeStackNavigator();
const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="MainTabs" component={MainTabs} />
      <MainStack.Screen name="CreateCompany" component={CreateCompany} />
      <MainStack.Screen name="CreateQA" component={CreateQA} />
      <MainStack.Screen name="EditQA" component={EditQA} />
      <MainStack.Screen name="Job" component={Job} />
      <MainStack.Screen name="SecondScreen" component={SecondScreen} />
    </MainStack.Navigator>
  );
};

const Tabs = createBottomTabNavigator();
const MainTabs = () => {
  const { isDarkmode } = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopColor: isDarkmode ? themeColor.dark100 : "#c0c0c0",
          backgroundColor: isDarkmode ? themeColor.dark200 : "#997B60",
        },
      }}
    >
      {/* these icons using Ionicons */}
      <Tabs.Screen
        name="Home"
        component={true?Home:HomeP}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Home" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"md-home"} />
          ),
        }}
      />
      <Tabs.Screen
        name={true?"Job":"Game"}
        component={true?Job:Game}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title={true?"Job":"Game"} />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={true?"code-working":"game-controller"} />
          ),
        }}
      />
       <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Profile" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"person"} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
};