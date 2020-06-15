import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
const GetLocation = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onGetLocation}>
      <Text>Get Location</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DDDDDD",
    width: "100%",
    padding: 10,
    marginBottom: 42,
  },
});
export default GetLocation;
