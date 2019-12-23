import React from 'react';
import { View, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from './../components/CustomHeaderButton';
import { useSelector } from 'react-redux';
import DefaultText from './../components/DefaultText';
import ListItem from '../components/ListItem';

const MealDetailScreen = props => {

    const availableMeals = useSelector(state => state.meals.meals);

    const mealId = props.navigation.getParam('mealId');
    
    const selectedMeal = availableMeals.filter(meal => meal.id === mealId);

    return (
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <DefaultText style={styles.title}>Ingredients</DefaultText>
            {selectedMeal.ingredients.map(ingredient => <ListItem key={ingredient}>{ingredient}</ListItem>)}
            <DefaultText style={styles.title}>Steps</DefaultText>
            {selectedMeal.steps.map(step => <ListItem key={step}>{step}</ListItem>)}
            <Button title={'Back to main screen'} onPress={() => {
                props.navigation.popToTop();
            }
            } />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        marginTop: 20,
        marginBottom: 10,
        fontFamily: 'ubuntu-bold',
        fontSize: 22,
        textAlign: 'center',
    }
});

MealDetailScreen.navigationOptions = navigationData => {

    return {
        headerRight: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
                title={'ww'}
                iconName={'ios-star-outline'}
                onPress={() => { console.log('Marked as Favorite!! ! ! ! ! ! ') }}
            />
        </HeaderButtons>
    };
};

export default MealDetailScreen;