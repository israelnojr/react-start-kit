import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import TabsController from "./components/TabsController";

const Drawer = createDrawerNavigator();

function RootComponent() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        {/* <Drawer.Screen name="Home" component={HomeStackScreen} options={{}} />
        <Drawer.Screen name="Map" component={MapStackScreen} options={{}} /> */}
        <Drawer.Screen name="Home" component={TabsController} options={{}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default RootComponent;
