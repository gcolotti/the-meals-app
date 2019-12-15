import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { CATEGORIES, MEALS } from './../data/dummy-data';

const CategoryMealScreen = props => {

    const category_id = props.navigation.getParam('category_id');

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(category_id) >= 0);

    const renderMealItem = itemData => {
        return (
            <View>
                <Text>{itemData.item.title}</Text>
            </View>
        );
    }

    return (
        <View style={styles.screen}>
            <FlatList data={displayedMeals} keyExtractor={(item, index) => item.id} renderItem={renderMealItem}/>
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