import React from 'react';
import { useSelector } from 'react-redux';
import { CATEGORIES } from '../data/dummy-data';
import MealList from './../components/MealList';
import { View, Text, StyleSheet } from 'react-native';
import DefaultText from '../components/DefaultText';

const CategoryMealsScreen = props => {

    const category_id = props.navigation.getParam('category_id');

    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(category_id) >= 0);

    if (displayedMeals.length === 0) {
        return (
            <View style={styles.content}>
                <Text>
                    No items in the category!
                </Text>
            </View>
        );
    }

    return (
        <MealList listData={displayedMeals} navigation={props.navigation} />
    );
}

CategoryMealsScreen.navigationOptions = navigationData => {
    const category_id = navigationData.navigation.getParam('category_id');
    const selectedCategory = CATEGORIES.find(cat => cat.id === category_id);

    return {
        headerTitle: selectedCategory.title,
    };
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CategoryMealsScreen;