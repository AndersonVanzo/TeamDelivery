import React from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../../commons/styles";
import OrderCardView from "../../components/OrderCard/view";
import ContentView from "../../components/ContentView/view";
import Header from "../../components/Header";
import Footer from "../../components/Footer/view";

const OrdersView = (): JSX.Element => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <Header title={"Pedidos"} />
      <ContentView styles={{ marginTop: -20 }}>
        <FlatList
          style={globalStyles.listContainer}
          contentContainerStyle={globalStyles.listContentOnly}
          data={[1, 2, 3, 4, 5]}
          renderItem={() => <OrderCardView />}
        />
      </ContentView>
      <Footer />
    </SafeAreaView>
  );
};

export default OrdersView;
