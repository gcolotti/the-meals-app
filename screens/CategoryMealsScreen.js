import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = props => {

    const category_id = props.navigation.getParam('category_id');

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(category_id) >= 0);

    const renderMealItem = itemData => {
        return (
            <MealItem
                title={itemData.item.title}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                image={itemData.item.imageUrl}
                onSelectMeal={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetail',
                        params: {
                            meal: itemData.item
                        }
                    })
                }}/>
        );
    }

    return (
        <View style={styles.screen}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{width: '100%', padding: 10,}}
                />
        </View>
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
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CategoryMealsScreen;