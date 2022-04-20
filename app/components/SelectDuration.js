import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import colors from '../config/colors';
import { useState } from 'react';

export default function SelectDuraion() {

    const [value, setValue] = useState(0);
    const [selectedTime, setSelectedTime] = useState(new Date());

    return (
        <View style={styles.container}>
            <Text style={{ color: '#5C55B9', fontWeight: 'bold', marginLeft: 10 }}>Estimated Duration</Text>
            <Slider
                style={{ width: 280, height: 30 }}
                minimumValue={0}
                maximumValue={24}
                minimumTrackTintColor={colors.primary}
                maximumTrackTintColor={colors.secondary}
                step={1}
                onValueChange={(value) => setValue(value)}
            />
            <Text style={{ marginLeft: 10, left: value * 10, color: '#5C55B9' }}>
                {value} hr
            </Text>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginTop: 10 }}>
                <TouchableOpacity style={{flexDirection:'row'}} onPress={() => setDatePickerVisibility(true)} >
                    <Text style={{ color: colors.primary }}>
                        Check In time
                    </Text>
                </TouchableOpacity>
                <Text style={{ color: colors.black }}>
                    {selectedTime.getHours()}:
                    {selectedTime.getMinutes()}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 120,
        flexDirection: 'column',
        backgroundColor: colors.white,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
        justifyContent: 'center',
        padding: 10,
        // alignItems:'center',
        marginTop: 20,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 10,
    },
});
