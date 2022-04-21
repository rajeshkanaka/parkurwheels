import { useState } from 'react';
import { Modal, View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import colors from "../config/colors";
import ModalView from "./Modal";

function ViewBookingDetails({ bookingDetails, setModalVisible, modalVisible }) {

    const [successModal, setSuccessModal] = useState(false);

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Awesome! You're done parking</Text>
                        <View style={{ flexDirection: 'row', width:150 }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.modalText}>Booked Space:</Text>
                                <Text style={styles.modalText}>Check-In Date :</Text>
                                <Text style={styles.modalText}>Check-In Time :</Text>
                                <Text style={styles.modalText}>Vehicle: </Text>
                                <Text style={styles.modalText}>Total: </Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.modalText}>{bookingDetails.parkingPlace}</Text>
                                <Text style={styles.modalText}>Check-In Date :</Text>
                                <Text style={styles.modalText}>Check-In Time :</Text>
                                <Text style={styles.modalText}>{bookingDetails.selectedVehicle}</Text>
                                <Text style={styles.modalText}>{bookingDetails.total} </Text>
                            </View>
                        </View>
                        <ModalView successModal={successModal} setSuccessModal={setSuccessModal} />
                        <TouchableOpacity
                            style={{ ...styles.confirmButton, alignSelf: 'center' }}
                            onPress={() => setSuccessModal(true)}
                        >
                            <Text style={styles.buttonText}>Proceed to payment</Text>
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
        height: 250,
        borderRadius: 20,
        padding: 30,
        //alignItems: "center",
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
        backgroundColor: colors.medium,
    },
    buttonText: {
        color: colors.white,
        fontSize: 18,
        // fontWeight: "bold",
        textAlign: 'center',
    },
    modalText: {
        textAlign: "center",
        fontSize: 20,
        // fontWeight:'bold',
    },
    horizontalLine: {
        borderWidth: 0.5,
        borderColor: colors.black,
        width: 300,
    },
});

export default ViewBookingDetails;