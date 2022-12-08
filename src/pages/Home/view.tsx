import React from "react";
import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../../commons/styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer/view";
import ContentView from "../../components/ContentView/view";
import AnnouncementCardView from "../../components/AnnouncementCard/view";

const HomeView = (): JSX.Element => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <Header title={"Team Delivery"} />
      <ContentView>
        <Text style={globalStyles.pageTitle}>Faça seu pedido</Text>
        <FlatList
          style={globalStyles.listContainer}
          contentContainerStyle={globalStyles.listContent}
          data={[1, 2, 3, 4, 5]}
          renderItem={(item) => <AnnouncementCardView />}
        />
      </ContentView>
      <Footer />
    </SafeAreaView>
  );
};

export default HomeView;
