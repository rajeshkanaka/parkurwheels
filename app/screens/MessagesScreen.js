import React, { useState, useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AuthContext from "../auth/context";

import Screen from "../components/Screen";
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";

const initialMessages = [
  {
    id: 1,
    title: "",
    description: "Deccan Parking booked from 2 pm to 4 pm, Paid 40 Rupees",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "",
    description:
      "Bhandarkar Road Parking booked from 6 pm to 8 pm, Paid 40 Rupees",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={user.name + " at " + new Date().toLocaleString()}
            subTitle={item.description}
            //image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              //image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
