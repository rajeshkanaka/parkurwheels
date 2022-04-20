import React, { useState, useContext } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { ListItem, ListItemSeparator } from "../components/lists";
import colors from "../config/colors";
import Icon from "../components/Icon";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import AuthContext from "../auth/context";
// import { openDatabase } from 'react-native-sqlite-storage';

// const db = openDatabase({ name: 'ParkingDatabase.db' });

const menuItems = [
  {
    title: "Parkings Available",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen: routes.BOOKING,
  },
  {
    title: "My Transactions",
    icon: {
      name: "table-edit",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
];

function AccountScreen({ navigation }) {
  const { user, setUser } = useContext(AuthContext);

  // useEffect(() => {
  //   db.transaction(function (txn) {
  //     txn.executeSql(
  //       "SELECT name FROM sqlite_master WHERE type='table' AND name='booking_details'",
  //       [],
  //       function (tx, res) {
  //         console.log('item:', res.rows.length);
  //         if (res.rows.length == 0) {
  //           txn.executeSql(
  //             'CREATE TABLE IF NOT EXISTS booking_details(mesaage_id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(50), description VARCHAR(255), image VARCHAR(255))',
  //             []
  //           );
  //         }
  //       }
  //     );
  //   });
  // }, []);

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={"Welcome " + user.name + ", Lets find Parking"}
          image={
            user.name === "Snehal"
              ? require("../assets/snehal.jpg")
              : require("../assets/rajesh.jpg")
          }
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={() => setUser(null)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
