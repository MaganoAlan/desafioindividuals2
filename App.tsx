import React from "react";
import { NativeBaseProvider, StatusBar } from "native-base";
import { Home } from "./src/screens/Home";
import { MAIN } from "./src/theme/main";
import { Provider } from "react-redux";
import store from "./src/store/Store";
import { ApolloProvider } from "@apollo/client";
import client from "./src/service";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={MAIN}>
        <ApolloProvider client={client}>
          <NavigationContainer>
            <StatusBar backgroundColor="#3E9043" barStyle={"light-content"} />
            <Routes />
          </NavigationContainer>
        </ApolloProvider>
      </NativeBaseProvider>
    </Provider>
  );
}
