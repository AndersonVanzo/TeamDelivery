import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../../commons/styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer/view";
import ContentView from "../../components/ContentView/view";
import { FlatList } from "react-native";
import DeliveryCardView from "../../components/DeliveryCard/view";

const DeliveriesView = (): JSX.Element => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <Header title={"Entregas"} />
      <ContentView styles={{ marginTop: -20 }}>
        <FlatList
          style={globalStyles.listContainer}
          contentContainerStyle={globalStyles.listContentOnly}
          data={[1, 2, 3, 4, 5]}
          renderItem={() => <DeliveryCardView />}
        />
      </ContentView>
      <Footer />
    </SafeAreaView>
  );
};

export default DeliveriesView;
