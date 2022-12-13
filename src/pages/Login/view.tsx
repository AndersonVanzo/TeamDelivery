import React from "react";
import { GoogleSignin, GoogleSigninButton } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../../commons/styles";
import ContentView from "../../components/ContentView/view";
import { Text } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

const LoginView = (): JSX.Element => {
  const [logging, setLogging] = React.useState<boolean>(false);

  const navigation = useNavigation<NavigationProps>();

  const login = async () => {
    setLogging(true);
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const { idToken } = await GoogleSignin.signIn();
    if (idToken == null) return setLogging(false);
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    await auth().signInWithCredential(googleCredential);
    setLogging(false);
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <ContentView styles={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.title}>Bem vindo ao{"\n"}Team Delivery!</Text>
        <GoogleSigninButton
          style={{ width: 312, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          disabled={logging}
          onPress={() => login()} />
      </ContentView>
    </SafeAreaView>
  );
};

export default LoginView;
