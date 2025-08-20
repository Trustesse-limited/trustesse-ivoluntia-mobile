import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Participation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Participation</Text>
    </View>
  );
};

export default Participation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
