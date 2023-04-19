import React from "react";
//import { useSelector } from "react-redux";
import Layouts from "../share/layout";
//import Authentications from "../src/authentications";
import Routes from "./routes";
import { Text } from "@ui-kitten/components";

export default function Default() {
  //const status = useSelector((state) => state.StatusApp);
  return (
    <>
      {true ? (
        <Routes />
      ) : (
        //<Layouts><Authentications /></Layouts> Login
        <Layouts><Text>Authentications unfound!</Text></Layouts>
      )}
    </>
  );
}