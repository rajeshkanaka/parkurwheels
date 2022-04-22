import { useState } from 'react';
import { Modal, View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import colors from "../config/colors";
import ActivityIndicator from "../components/ActivityIndicator";

function ViewBookingDetails({ bookingDetails, setModalVisible, modalVisible, setSuccessModal, successModal }) {

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <ActivityIndicator image={require("../assets/animations/congratulations.json")} visible={true} />
                        <Text style={{ ...styles.modalText, textAlign: 'center', fontSize: 18 }}>Awesome! You're done parking</Text>
                        <View style={styles.horizontalLine} />
                        <View style={{ flexDirection: 'row', width: 150, marginLeft: 10 }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ ...styles.modalText, textAlign: "left" }}>Booked Space:</Text>
                            </View>
                            <View style={{ flexDirection: 'column', marginLeft: 30 }}>
                                <Text style={{ ...styles.modalText }}>{bookingDetails.parkingPlace}</Text>
                            </View>
                        </View>
                        <View style={styles.horizontalLine} />
                        <View style={{ flexDirection: 'row', width: 150, marginLeft: 10 }}>
                            <View style={{ flexDirection: 'column' }}>

                                <Text style={styles.modalText}>Check-In Date :</Text>
                                <Text style={styles.modalText}>Check-In Time :</Text>
                                <Text style={styles.modalText}>Vehicle: </Text>
                                <Text style={styles.modalText}>Total: </Text>
                            </View>
                            <View style={{ flexDirection: 'column', marginLeft: 30 }}>

                                <Text style={styles.modalText}>{bookingDetails.bookingDate}</Text>
                                <Text style={styles.modalText}>{bookingDetails.bookingTime}</Text>
                                <Text style={styles.modalText}>{bookingDetails.selectedVehicle}</Text>
                                <Text style={styles.modalText}>{bookingDetails.total} </Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.confirmButton}
                            onPress={() => { setSuccessModal(!successModal); setModalVisible(!modalVisible) }}
                        >
                            <Text style={styles.buttonText}>Pay Up</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        backgroundColor: "white",
        height: 300,
        borderRadius: 20,
        padding: 30,
        // alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        justifyContent: 'space-between',
    },
    confirmButton: {
        borderRadius: 10,
        margin: 20,
        justifyContent: 'center',
        width: 200,
        height: 40,
        backgroundColor: '#5C55B9',
        alignSelf: 'center',
    },
    buttonText: {
        color: colors.white,
        fontSize: 18,
        // fontWeight: "bold",
        textAlign: 'center',
    },
    modalText: {
        // textAlign: "center",
        fontSize: 16,
        // fontWeight:'bold',
        color: colors.black,
    },
    horizontalLine: {
        borderWidth: 0.5,
        borderColor: colors.black,
        width: 300,
        margin: 10,
    },
});

export default ViewBookingDetails;