import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import GetLocation from "../components/Location";
import UsersMap from "../components/UserMap";

export default class MapScreen extends React.Component {
  state = {
    userLocation: null,
  };
  userCurrentLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          userLocation: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0622,
            longitudeDelta: 0.0421,
          },
        });
        console.log(position.coords.latitude, "latitude");
        console.log(position.coords.longitude, "longitude");
      },
      (err) => console.log(err)
    );
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <UsersMap userLocation={this.state.userLocation} />
        <GetLocation onGetLocation={this.userCurrentLocationHandler} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});
