import { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import colors from '../config/colors';
import LocationData from '../config/LocationData';

export default function SelectArea({setSelectedArea}) {

    const [cities, setCities] = useState([]);
    const [cityObject, setCityObject] = useState([]);
    const [area, setArea] = useState([]);
    const dropdownRefCity = useRef({});
    const dropdownRefArea = useRef({});
    return (
        <View style={styles.mainCardView}>
            <Text style={styles.cardHeaderText}>Where are you going to?</Text>
            <View>
                <SelectDropdown
                    data={LocationData}
                    defaultButtonText='State'
                    buttonStyle={{ ...styles.dropDownButtonStyle, alignSelf: 'center', width: 180 }}
                    buttonTextStyle={styles.dropDownButtonTextStyle}
                    onSelect={(selectedItem, index) => {
                        const obj = LocationData.filter((item) => item.name == selectedItem.name)
                        setCityObject(obj[0].cities);
                        const city = obj[0].cities.map((item) => item.name)
                        setCities(city)
                        dropdownRefCity.current.reset();
                        dropdownRefArea.current.reset(); { }
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem.name
                    }}
                    rowTextForSelection={(item, index) => {
                        return item.name
                    }}
                    renderDropdownIcon={isOpened => {
                        return <Image source={isOpened ? require('./../assets/chevron-up.png') : require('./../assets/chevron-down.png')} style={{ height: 25, width: 25 }} />
                    }}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <SelectDropdown
                    data={cities}
                    defaultButtonText='City'
                    buttonStyle={styles.dropDownButtonStyle}
                    buttonTextStyle={styles.dropDownButtonTextStyle}
                    ref={dropdownRefCity}
                    onSelect={(selectedItem, index) => {
                        const obj = cityObject.filter((item) => item.name == selectedItem)
                        setArea(obj[0].area)
                        dropdownRefArea.current.reset();
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}
                    renderDropdownIcon={isOpened => {
                        return <Image source={isOpened ? require('./../assets/chevron-up.png') : require('./../assets/chevron-down.png')} style={{ height: 25, width: 25 }} />
                    }}
                />
                <SelectDropdown
                    data={area}
                    defaultButtonText='Area'
                    buttonStyle={styles.dropDownButtonStyle}
                    buttonTextStyle={styles.dropDownButtonTextStyle}
                    ref={dropdownRefArea}
                    onSelect={(selectedItem, index) => {
                        setSelectedArea(selectedItem)
                        console.log(selectedItem)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}
                    renderDropdownIcon={isOpened => {
                        return <Image source={isOpened ? require('./../assets/chevron-up.png') : require('./../assets/chevron-down.png')} style={{ height: 25, width: 25 }} />
                    }}
                />
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        marginTop: 40
    },
    mainCardView: {
        height: 170,
        flexDirection: 'column',
        backgroundColor: colors.light,
        borderRadius: 15,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        justifyContent: 'space-between',
        // paddingLeft: 16,
        // paddingRight: 14,
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 16,
        marginRight: 16,
    },
    dropDownButtonStyle: {
        // borderRadius: 20,
        backgroundColor: colors.white,
        shadowColor: colors.medium,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        height: 45,
        width: 140,
        margin: 10,
    },
    dropDownButtonTextStyle: {
        fontSize: 15,
    },
    cardHeaderText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 5
    },
});
