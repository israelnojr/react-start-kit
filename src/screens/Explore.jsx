import React from "react";
import { View, Text, Button } from "react-native";

function ExploreScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Explore Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Map")}
      />
    </View>
  );
}

export default ExploreScreen;
