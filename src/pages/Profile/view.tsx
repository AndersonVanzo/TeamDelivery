import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../../commons/styles";
import Footer from "../../components/Footer/view";
import ContentView from "../../components/ContentView/view";
import { Image, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { colors } from "../../commons/colors";

const ProfileView = (): JSX.Element => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ContentView>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: "https://beta.ctvnews.ca/content/dam/ctvnews/images/2019/11/18/1_4691731.png?cache_timestamp=1574134871525" }}
            style={styles.image} />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={globalStyles.input}
            placeholder={"Seu nome"}
            placeholderTextColor={colors.gray}
          />
          <View style={styles.separator} />
          <Text style={styles.label}>Pix</Text>
          <TextInput
            style={globalStyles.input}
            placeholder={"Sua chave pix"}
            placeholderTextColor={colors.gray}
          />
          <View style={styles.separator} />
          <Text style={styles.label}>Banco</Text>
          <TextInput
            style={globalStyles.input}
            placeholder={"O banco para transferência"}
            placeholderTextColor={colors.gray}
          />
        </View>
      </ContentView>
      <Footer />
    </SafeAreaView>
  );
};

export default ProfileView;
