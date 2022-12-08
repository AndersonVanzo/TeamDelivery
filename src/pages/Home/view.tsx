import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../../commons/styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer/view";

const HomeView = (): JSX.Element => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <Header title={"Team Delivery"} />
      <Footer />
    </SafeAreaView>
  );
};

export default HomeView;
