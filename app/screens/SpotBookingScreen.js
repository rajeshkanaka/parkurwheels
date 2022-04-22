import { useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import SelectDuraion from "../components/SelectDuration";
import ViewBookingDetails from "../components/ViewBookingDetails";
import colors from "../config/colors";
import ModalView from "../components/Modal";

function SpotBookingScreen({ route }) {

    const [modalVisible, setModalVisible] = useState(false);
    const [bookingDetails, setBookingDetails] = useState(route.params);
    const [successModal, setSuccessModal] = useState(false);
    const [hrs, setHrs] = useState(0);
    const [bookingDate, setBookingDate] = useState(new Date().toLocaleDateString());
    const [bookingTime, setBookingTime] = useState(new Date().toLocaleTimeString());
    const [availableSpots, setAvailableSpots] = useState(10);

    const [spotArrayLeft, setSpotArrayLeft] = useState([[0, 1, 0,],
    [1, 1, 0,],
    [0, 0, 0,]]);
    const [spotArrayRight, setSpotArrayRight] = useState([[1, 1, 0,],
    [1, 0, 0,],
    [0, 1, 0,]]);

    const handleLeftArrayChange = (index, rowIndex) => {
        let spotArray = spotArrayLeft;
        spotArray[rowIndex][index] = 1;
        setSpotArrayLeft([...spotArray]);
    }

    const handleRightArrayChange = (index, rowIndex) => {
        let spotArray = spotArrayLeft;
        spotArray[rowIndex][index] = 1;
        setSpotArrayRight([...spotArray]);
    }

    useEffect(() => {
        let details = bookingDetails;
        details["total"] = details["rate"] * hrs;
        details["bookingDate"] = bookingDate;
        details["bookingTime"] = bookingTime;
        setBookingDetails(details);
        const array1 = Array.from({ length: 3 }, () => Math.floor(Math.random() * 2));
        const array2 = Array.from({ length: 3 }, () => Math.floor(Math.random() * 2));
        const array3 = Array.from({ length: 3 }, () => Math.floor(Math.random() * 2));
        setSpotArrayLeft([[...array1], [...array2], [...array3]]);
        const array4 = Array.from({ length: 3 }, () => Math.floor(Math.random() * 2));
        const array5 = Array.from({ length: 3 }, () => Math.floor(Math.random() * 2));
        const array6 = Array.from({ length: 3 }, () => Math.floor(Math.random() * 2));
        setSpotArrayRight([[...array4], [...array5], [...array6]]);
        const spots = array1.filter(v => v === 0).length + array2.filter(v => v === 0).length + array3.filter(v => v === 0).length +
            array4.filter(v => v === 0).length + array5.filter(v => v === 0).length + array6.filter(v => v === 0).length
        setAvailableSpots(spots);
        }, [hrs, bookingTime, bookingDate]);
    return (
        <View style={styles.centeredView}>

            <View>
                <View style={styles.centeredView}>
                    <SelectDuraion setHrs={setHrs} bookingDate={bookingDate} setBookingDate={setBookingDate} bookingTime={bookingTime} setBookingTime={setBookingTime} />

                    <View style={styles.spotView}>
                        <Text style={styles.modalText}>{availableSpots} Spots available</Text>
                        <View
                            style={{ flexDirection: 'row' }}
                        >
                            <View>
                                {
                                    spotArrayLeft.map((row, rowIndex) => {
                                        const parkingLot = rowIndex == 0 ? 'a' : rowIndex == 1 ? 'b' : 'c';
                                        return (
                                            <View key={rowIndex} style={{ ...styles.button, flexDirection: 'row' }}>
                                                {row.map((spot, index) => {
                                                    return (
                                                        spot == 1 ? (<View key={index} style={{ margin: 10, }}>
                                                            <Image source={require('../assets/car-icon.png')} style={{ height: 30, width: 25 }} />
                                                        </View>) : (<TouchableOpacity key={index} onPress={() => handleLeftArrayChange(index, rowIndex)} style={{ backgroundColor: '#16FC72', height: 30, width: 20, margin: 10, borderRadius: 5 }}>
                                                            <Text style={{ textAlign: 'center' }}>{parkingLot + (index + 1)}</Text>
                                                        </TouchableOpacity>)
                                                    );
                                                })}
                                            </View>
                                        )
                                    })
                                }
                            </View>
                            <View style={styles.verticleLine}></View>
                            <View>
                                {
                                    spotArrayRight.map((row, rowIndex) => {
                                        const parkingLot = rowIndex == 0 ? 'd' : rowIndex == 1 ? 'e' : 'f';
                                        return (
                                            <View key={rowIndex} style={{ ...styles.button, flexDirection: 'row' }}>
                                                {row.map((spot, index) => {
                                                    return (
                                                        spot == 1 ? (<View key={index} style={{ margin: 10, }}>
                                                            <Image source={require('../assets/car-icon.png')} style={{ height: 30, width: 25 }} />
                                                        </View>) : (<TouchableOpacity key={index} onPress={() => handleRightArrayChange(index, rowIndex)} style={{ backgroundColor: '#16FC72', height: 30, width: 20, margin: 10, borderRadius: 5 }}>
                                                            <Text style={{ textAlign: 'center' }}>{parkingLot + (index + 1)}</Text>
                                                        </TouchableOpacity>)
                                                    );
                                                })}
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        </View>
                    </View>
                    <ModalView successModal={successModal} setSuccessModal={setSuccessModal} location={bookingDetails.location} />
                    <ViewBookingDetails bookingDetails={bookingDetails} setModalVisible={setModalVisible} modalVisible={modalVisible} setSuccessModal={setSuccessModal} successModal={successModal} />
                    <TouchableOpacity
                        style={[styles.confirmButton, { backgroundColor: colors['secondary'] }]}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={styles.buttonText}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",

    },
    spotView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
    },
    button: {
        borderRadius: 10,
        paddingLeft: 10,
        margin: 15,
        elevation: 2,
        backgroundColor: "#613EEA",
        justifyContent: 'center',
        width: 130,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    verticleLine: {
        height: '100%',
        width: 1,
        backgroundColor: '#909090',
    },
    confirmButton: {
        borderRadius: 20,
        margin: 20,
        justifyContent: 'center',
        width: 170,
        height: 40,
    },
    buttonText: {
        color: colors.white,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold",
        textAlign: 'center',
    },
});

export default SpotBookingScreen;