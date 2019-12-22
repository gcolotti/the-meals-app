import React from 'react';
import { Text, View, StyleSheet, Item, ViewPropTypes } from 'react-native';
import DefaultText from './DefaultText';
import { Ionicons } from '@expo/vector-icons';

const ListItem = props => {
    return (
        <View style={{ ...styles.listItem, ...props.styles }}>
            <Ionicons
                name={'ios-star'}
                IconComponent={Ionicons}
                iconSize={23}
                color={'black'} /><DefaultText>{props.children}</DefaultText>
            
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
    }
});

export default ListItem;