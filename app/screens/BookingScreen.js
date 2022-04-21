import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import colors from "../config/colors";
import SelectArea from "../components/SelectArea";
import SelectVehicle from "../components/SelectVehicle";
import Button from "../components/Button";
import routes from "../navigation/routes";
import { useState } from 'react';

function BookingScreen({ navigation }) {

    const [area, setSelectedArea] = useState();
    const [selectedVehicle, setSelectedVihicle] = useState();

  return (
    <View style={styles.container}>
      <ScrollView>
        <SelectArea setSelectedArea={setSelectedArea} />
        <SelectVehicle setSelectedVihicle={setSelectedVihicle} />
        <Button
          title="Book Spot"
          color="secondary"
          onPress={() => navigation.navigate(routes.LISTINGS, {area,selectedVehicle})}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginVertical:20,
    flexDirection: 'column',
    justifyContent:'space-between',
    alignItems:'center',
  },
});

export default BookingScreen;