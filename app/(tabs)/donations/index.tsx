import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";

const Donations = () => {
  const theme = useColorScheme();

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          { color: theme === "light" ? Colors.light.text : Colors.dark.text },
        ]}
      >
        Donations
      </Text>
    </View>
  );
};

export default Donations;

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
