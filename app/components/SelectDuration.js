import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import colors from '../config/colors';
import { useState } from 'react';

export default function SelectDuraion({ setHrs, bookingDate, setBookingDate, bookingTime, setBookingTime }) {

    const [value, setValue] = useState(1);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirmDatePicker = (date) => {
        setBookingDate(date.toLocaleDateString());
        hideDatePicker();
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleConfirmTimePicker = (time) => {
        setBookingTime(time.toLocaleTimeString());
        hideTimePicker();
    };

    return (
        <View style={styles.container}>
            <Text style={{ color: '#5C55B9', fontWeight: 'bold', marginLeft: 10 }}>Estimated Duration</Text>
            <Slider
                style={{ width: 280, height: 30 }}
                minimumValue={1}
                maximumValue={24}
                minimumTrackTintColor={colors.primary}
                maximumTrackTintColor={colors.secondary}
                step={1}
                onValueChange={(value) => { setValue(value); setHrs(value) }}
            />
            <Text style={{ marginLeft: 10, left: value * 10, color: '#5C55B9' }}>
                {value} hr
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => setDatePickerVisibility(true)} >
                    <Text style={{ color: "#5C55B9" }}>
                        Check In Date
                    </Text>
                    <Image source={require("../assets/edit.png")} style={{ height: 15, width: 15, marginLeft: 10 }} />
                </TouchableOpacity>
                <Text style={{ color: colors.black }}>
                    {bookingDate}
                </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => setTimePickerVisibility(true)} >
                    <Text style={{ color: "#5C55B9" }}>
                        Check In time
                    </Text>
                    <Image source={require("../assets/edit.png")} style={{ height: 15, width: 15, marginLeft: 10 }} />
                </TouchableOpacity>
                <Text style={{ color: colors.black }}>
                    {bookingTime}
                </Text>
            </View>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirmDatePicker}
                onCancel={hideDatePicker}
                minimumDate={new Date()}
                maximumDate={new Date(Date.now() + 2 * 24*60*60*1000)}
            />
            <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleConfirmTimePicker}
                onCancel={hideTimePicker}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 130,
        flexDirection: 'column',
        backgroundColor: colors.white,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
        justifyContent: 'center',
        padding: 10,
        marginTop: 20,
        marginLeft: 16,
        marginRight: 16,
    },
});
