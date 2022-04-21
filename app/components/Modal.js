import { Modal, View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import colors from "../config/colors";
import ActivityIndicator from "../components/ActivityIndicator";

function ModalComponent({ successModal, setSuccessModal }) {

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={successModal}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Space Successfully Booked</Text>
                        <ActivityIndicator image={require("../assets/animations/done.json")} visible={true}/>
                        <TouchableOpacity
                            style={styles.confirmButton}
                            onPress={() => setSuccessModal(!successModal)}
                        >
                            <Text style={styles.buttonText}>Show on map</Text>
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
        height:250,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        justifyContent:'space-between',
    },
    confirmButton: {
        borderRadius: 20,
        margin: 20,
        justifyContent: 'center',
        width: 170,
        height: 40,
        backgroundColor: "blue",
    },
    buttonText: {
        color: colors.white,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold",
        textAlign: 'center',
      },
    modalText: {
        textAlign: "center",
        fontSize:20,
        fontWeight:'bold',
    },
});

export default ModalComponent;