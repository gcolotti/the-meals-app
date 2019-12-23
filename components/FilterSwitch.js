import React, { useState } from 'react';
import { Text, View, Switch, StyleSheet } from 'react-native';
import DefaultText from './../components/DefaultText';
import Colors from './../constants/Colors';

const FilterSwitch = props => {
    return (
        <View style={{...styles.componentContainer, ...props.style}}>
            <DefaultText style={styles.text}>
                {props.label}
            </DefaultText>
            <Switch
                trackColor={{true: Colors.primaryColor}}
                thumbColor={'#eee'}
                value={props.value}
                onValueChange={props.onValueChange}/>
        </View>
    );
};

const styles = StyleSheet.create({
    componentContainer: {
        marginVertical: 15,
        width: '90%',
        flexDirection: 'row',        
        justifyContent: 'space-between'        
    },
    text: {
        fontSize: 22,
    },
});

export default FilterSwitch;