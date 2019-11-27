import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Colors from './../constants/Colors';
import { CATEGORIES } from './../data/dummy-data';

const CategoryMealScreen = props => {

    const category_id = props.navigation.getParam('category_id');

    const selectedCategory = CATEGORIES.find(cat => cat.id === category_id);

    return (
        <View style={styles.screen}>
            <Text>The Category Meal Screen!</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title={'Go to details'} onPress={() => {
                props.navigation.navigate({
                    routeName: 'MealDetail'
                });
            }} />
            <Button title={'Go Back!'} onPress={() => {
                props.navigation.goBack();
            }} />
        </View>
    );
}

CategoryMealScreen.navigationOptions = navigationData => {
    const category_id = navigationData.navigation.getParam('category_id');
    const selectedCategory = CATEGORIES.find(cat => cat.id === category_id);

    return {
        headerTitle: selectedCategory.title,
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CategoryMealScreen;