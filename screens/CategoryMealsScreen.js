import React from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from './../components/MealList';

const CategoryMealsScreen = props => {

    const category_id = props.navigation.getParam('category_id');

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(category_id) >= 0);

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

export default CategoryMealsScreen;