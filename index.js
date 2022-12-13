/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

import { GoogleSignin } from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
  webClientId: "865495792563-rgde205u32ictpa5al76htngmcuooauj.apps.googleusercontent.com",
});

AppRegistry.registerComponent(appName, () => App);
