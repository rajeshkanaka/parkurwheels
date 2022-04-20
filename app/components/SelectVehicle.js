import { FlatList, Animated, View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import Carousel from 'react-native-snap-carousel';
import VehicleData from "../config/VehicleData";
import colors from "../config/colors";

export default function SelectVehicle() {

    const [slideIndex, setSlideIndex] = useState(0);
    const [isPressed, setIsPressed] = useState();

    const Slide = ({ item, index }) => {
        return (
            <View style={styles.slide}>
                <Image style={styles.vehicleImage} source={item.image} />
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#5C55B9' }}>{item.name}</Text>
                <TouchableOpacity style={isPressed == index ? styles.vehicleSelectPressButton : styles.vehicleSelectNormalButton} onPress={() => { setIsPressed(index) }} >
                    <Text style={isPressed == index ? { fontSize: 20, color: colors.white, } : { fontSize: 20, color: colors.black, }}>{'<<'}</Text>
                </TouchableOpacity>
            </View>

        );
    }

    return (
        <View style={styles.container}>
            <Carousel
                layout={"default"}
                data={VehicleData}
                sliderWidth={350}
                itemWidth={140}
                firstItem={1}
                renderItem={Slide}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical:20,
    },
    slide: {
        backgroundColor: '#FDFDAC',
        borderRadius: 10,
        height: 150,
        width: 110,
        alignItems: 'center',
    },
    vehicleImage: {
        height: 55,
        width: 90,
        margin: 10,
    },
    vehicleSelectNormalButton: {
        backgroundColor: colors.white,
        width: 60,
        margin: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    vehicleSelectPressButton: {
        backgroundColor: colors.black,
        width: 60,
        margin: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    }

});
