import React from "react";
//import { useSelector } from "react-redux";
import AppNavigator from "../navigation/AppNavigator";
import { Text } from "react-native-rapi-ui";
import Login from "../screens/Login";

export default function Default() {
  //const status = useSelector((state) => state.StatusApp);
  return (
    <>
      {false ? (
         <Login/>
      ) : (
        <AppNavigator/>
      )}
    </>
  );
}