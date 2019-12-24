import React, { useEffect, useCallback } from 'react';
import { View, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from './../components/CustomHeaderButton';
import { useSelector, useDispatch } from 'react-redux';
import DefaultText from './../components/DefaultText';
import ListItem from '../components/ListItem';
import { toogleFavorite } from '../store/actions/meals';

const MealDetailScreen = props => {

    const availableMeals = useSelector(state => state.meals.meals);

    const mealId = props.navigation.getParam('mealId');

    const selectedMeal = availableMeals.find(meal => meal.id === mealId);

    const dispatch = useDispatch();

    const toogleFavotireHandler = useCallback(() => {
        dispatch(toogleFavorite(mealId));
    }, [dispatch, mealId]);

    useEffect(() => {       
        props.navigation.setParams({ toogleFav: toogleFavotireHandler })
    }, [toogleFavotireHandler]);

    // useEffect(() => {
    //     props.navigation.setParams({ mealTitle: selectedMeal.title });
    // }, [selectedMeal]);

    return (
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <DefaultText style={styles.detailsText}>{selectedMeal.duration}m</DefaultText>
                <DefaultText style={styles.detailsText}>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText style={styles.detailsText}>{selectedMeal.affordability.toUpperCase()}</DefaultText>
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
    detailsText: {
        fontFamily: 'ubuntu-bold',
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

    const mealTitle = navigationData.navigation.getParam('mealTitle');
    const toogleFav = navigationData.navigation.getParam('toogleFav')

    return {
        headerTitle: mealTitle,
        headerRight: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
                title={'ww'}
                iconName={'ios-star-outline'}
                onPress={toogleFav}
            />
        </HeaderButtons>
    };
};

export default MealDetailScreen;