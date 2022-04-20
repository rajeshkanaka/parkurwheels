import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import colors from "../config/colors";
import SelectArea from "../components/SelectArea";
import SelectVehicle from "../components/SelectVehicle";
import Button from "../components/Button";
import routes from "../navigation/routes";

function BookingScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <ScrollView>
        <SelectArea />
        <SelectVehicle />
        <Button
          title="Book Spot"
          color="secondary"
          onPress={() => navigation.navigate(routes.LISTINGS)}
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