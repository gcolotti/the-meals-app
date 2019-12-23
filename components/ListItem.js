import React from 'react';
import { View, StyleSheet } from 'react-native';
import DefaultText from './DefaultText';
import { AntDesign } from '@expo/vector-icons';

const ListItem = props => {
    return (
        <View style={{ ...styles.listItem, ...props.styles }}>
            <AntDesign
                name={'caretright'}
                IconComponent={AntDesign}
                iconSize={23}
                color={'black'} />
            <DefaultText style={styles.text}>{props.children}</DefaultText>
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    text: {
        marginLeft: 10,
    }
});

export default ListItem;