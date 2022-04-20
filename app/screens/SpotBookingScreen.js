import { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import SelectDuraion from "../components/SelectDuration";
import ModalView from "../components/Modal";
import colors from "../config/colors";

function SpotBookingScreen() {

    const [modalVisible, setModalVisible] = useState(false);
    const [spotArrayLeft, setSpotArrayLeft] = useState([['a1', 1, 'a3',],
    [1, 1, 'b3',],
    ['c1', 'c2', 'c3',]]);
    const [spotArrayRight, setSpotArrayRight] = useState([[1, 1, 'd3',],
    [1, 'e2', 'e3',],
    ['f1', 1, 'f3',]]);
    return (
        <View style={styles.centeredView}>

            <View>
                <View style={styles.centeredView}>
                    <SelectDuraion />

                    <View style={styles.spotView}>
                        <Text style={styles.modalText}>12 Spots available</Text>
                        <View
                            style={{ flexDirection: 'row' }}
                        >
                            <View>
                                {
                                    spotArrayLeft.map((row, index) => {
                                        return (
                                            <View style={{ ...styles.button, flexDirection: 'row' }}>
                                                {row.map((spot) => {
                                                    return (
                                                        spot==1 ? (<View style={{ margin: 10, }}>
                                                            <Image source={require('../assets/car-icon.png')} style={{ height: 30, width: 25 }} />
                                                        </View>) : (<TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ backgroundColor: '#16FC72', height: 30, width: 20, margin: 10, borderRadius: 5 }}>
                                                            <Text>{spot}</Text>
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
                                    spotArrayRight.map((row, index) => {
                                        return (
                                            <View style={{ ...styles.button, flexDirection: 'row' }}>
                                                {row.map((spot) => {
                                                    return (
                                                        spot==1 ? (<View style={{ margin: 10, }}>
                                                            <Image source={require('../assets/car-icon.png')} style={{ height: 30, width: 25 }} />
                                                        </View>) : (<TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ backgroundColor: '#16FC72', height: 30, width: 20, margin: 10, borderRadius: 5 }}>
                                                            <Text>{spot}</Text>
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
                    <ModalView setModalVisible={setModalVisible} modalVisible={modalVisible} />
                    <TouchableOpacity
                            style={[styles.confirmButton, { backgroundColor: colors['secondary'] }]}
                            onPress={() => setModalVisible(true)}
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