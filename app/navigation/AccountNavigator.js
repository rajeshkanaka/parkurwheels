import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import BookingScreen from "../screens/BookingScreen";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import SpotBookingScreen from "../screens/SpotBookingScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator >
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
    <Stack.Screen name="Booking" component={BookingScreen} />
    <Stack.Screen name="Listings" component={ListingsScreen} />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
    <Stack.Screen name="SpotBooking" component={SpotBookingScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
