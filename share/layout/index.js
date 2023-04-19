import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

export default function Layouts({children}) {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout style={styles.container} level="2">
        <Text style={styles.title} category="h6">
          Selecione autenticação da sua preferência!
        </Text>
        {children}
      </Layout>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 80,
  },
  title: {
    backgroundColor: "#d1d3dc",
    marginBottom: 5,
    padding: 10,
    borderRadius: 10,
  },
});