import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Favorites } from "../screens/Favorites";

const Navigation = createNativeStackNavigator();

export function Routes() {
  return (
    <Navigation.Navigator screenOptions={{ headerShown: false }}>
      <Navigation.Screen name="home" component={Home} />
      <Navigation.Screen name="favorites" component={Favorites} />
    </Navigation.Navigator>
  );
}
