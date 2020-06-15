import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MapView from "react-native-maps";

const UsersMap = (props) => {
  let userLocationMarker = null;
  if (props.userLocationMarker) {
    userLocationMarker = <MapView.Markeker coordinate={props.userLocation} />;
  }
  return (
    <View style={styles.mapContainer}>
      <MapView
        initialRegion={{
          latitude: 6.5655267,
          longitude: 3.2745521,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0421,
        }}
        region={props.userLocation}
        style={styles.map}
      >
        {userLocationMarker}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    width: "100%",
    height: "100%",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default UsersMap;
