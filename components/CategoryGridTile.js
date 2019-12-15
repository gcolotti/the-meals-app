import React from 'react';
import { View, Text, TouchableOpacity, TouchableNativeFeedback, StyleSheet, Platform } from 'react-native';


const CategoryGridTile = props => {

    let TouchableComp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 22) {
        TouchableComp = TouchableNativeFeedback;
    }

    return (
        <View style={styles.gridItem} >
            <TouchableComp style={styles.gridContainer} onPress={props.onSelect}>
                <View style={{ ...styles.itemContainer, ...{ backgroundColor: props.color } }}>
                    <Text style={styles.title} numberOfLines={2}>
                        {props.title}
                    </Text>
                </View>
            </TouchableComp>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'ubuntu-regular',
        fontSize: 20,
        textAlign: 'right',
    },
    gridContainer: {
        flex: 1,
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden',
    },
    itemContainer: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 5,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 15,
    }
});

export default CategoryGridTile;