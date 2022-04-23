import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import Button from "../components/Button";
import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import AppText from "../components/Text";
import useApi from "../hooks/useApi";

function ListingsScreen({ route, navigation }) {
  //const getListingsApi = useApi(listingsApi.getListings);
  const [listings, setListings] = useState([]);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    console.log("selected area:",route.params)
    const response = await listingsApi.getListings(route.params.area);
    console.log("Response is : ", response.data);
    setListings(response.data);
  };

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing,index) => (listing.id!=undefined)?listing.id.toString():index}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"Rs." + item.price[route.params.selectedVehicle] + " Per Hour"}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, {item , price:item.price[route.params.selectedVehicle], selectedVehicle:route.params.selectedVehicle})}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
