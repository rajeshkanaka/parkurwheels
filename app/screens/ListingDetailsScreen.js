import React, { useState, useContext } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AuthContext from "../auth/context";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import Text from "../components/Text";
import routes from "../navigation/routes";

function ListingDetailsScreen({ route, navigation }) {
  const { user } = useContext(AuthContext);
  const listing = route.params;

  return (
    <View>
      <ScrollView>
      <Image
        style={styles.image}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="light"
        uri={listing.images[0].url}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>Rs.{listing.price} Per Hr</Text>
        <Text style={styles.price}>
          12 Slots avaialable, 2 Two Wheeler, 3 Small Car, 5 Sedan, 2 SUV
        </Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/rajesh.jpg")}
            title={user.name}
            subTitle="Go ahead with booking "
            onPress={() => navigation.navigate(routes.SPOT_BOOKING)}
          />
        </View>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
