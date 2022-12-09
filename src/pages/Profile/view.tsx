import React from "react";
import { Image, Text, TextInput, View } from "react-native";
import ProfileViewController from "./view.controller";
import { useFocusEffect } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../../commons/styles";
import ContentView from "../../components/ContentView/view";
import { colors } from "../../commons/colors";
import { styles } from "./styles";
import Footer from "../../components/Footer/view";
import Button from "../../components/Button/view";

const ProfileView = (): JSX.Element => {
  const controller = ProfileViewController();

  useFocusEffect(
    React.useCallback(() => {
      controller.loadUserData();
    }, []),
  );

  return (
    <SafeAreaView style={globalStyles.container}>
      <ContentView styles={{ paddingBottom: 95 }}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: controller.image || "https://icon-library.com/images/default-user-icon/default-user-icon-5.jpg" }}
            style={styles.image} />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Nome</Text>
          {controller.editing ? (
            <TextInput
              value={controller.name}
              onChangeText={text => controller.changeName(text)}
              style={globalStyles.input}
              placeholder={"Seu nome"}
              placeholderTextColor={colors.gray}
            />
          ) : <Text style={styles.data}>{controller.name}</Text>}
          <View style={styles.separator} />
          <Text style={styles.label}>Pix</Text>
          {controller.editing ? (
            <TextInput
              value={controller.pix}
              style={globalStyles.input}
              placeholder={"Sua chave pix"}
              placeholderTextColor={colors.gray}
            />
          ) : <Text style={styles.data}>{controller.pix}</Text>}
          <View style={styles.separator} />
          <Text style={styles.label}>Banco</Text>
          {controller.editing ? (
            <TextInput
              value={controller.bank}
              style={globalStyles.input}
              placeholder={"O banco para transferência"}
              placeholderTextColor={colors.gray}
            />
          ) : <Text style={styles.data}>{controller.bank}</Text>}
        </View>
        <View style={styles.spacer} />
        {controller.editing ? (
          <React.Fragment>
            <Button
              text={"Salvar"}
              type={"default"}
              action={controller.toggleEditing}
              styles={{ marginBottom: 14 }} />
            <Button
              text={"Cancelar"}
              type={"cancel"}
              action={controller.toggleEditing} />
          </React.Fragment>
        ) : <Button text={"Editar"} type={"default"} action={controller.toggleEditing} />}
      </ContentView>
      <Footer />
    </SafeAreaView>
  );
};

export default ProfileView;
