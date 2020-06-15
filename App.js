import * as React from "react";
import { Platform, StyleSheet, SafeAreaView, Text, View } from "react-native";
import GetLocation from "./src/components/Location";
import UsersMap from "./src/components/UserMap";
const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default class App extends React.Component {
  state = {
    userLocation: null,
  };
  userCurrentLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0421,
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
