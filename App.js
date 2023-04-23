import React from "react";
import { ThemeProvider } from "react-native-rapi-ui";
import Default from "./src/routes";

export default function App() {
  return (
    <ThemeProvider>
      <Default/>
    </ThemeProvider>
  );
}
