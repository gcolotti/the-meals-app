import React from 'react';
import { View, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from './../components/CustomHeaderButton';
import DefaultText from './../components/DefaultText';
import ListItem from '../components/ListItem';

const MealDetailScreen = props => {
    const meal = props.navigation.getParam('meal');

    return (
        <ScrollView>
            <Image source={{ uri: meal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <DefaultText>{meal.duration}m</DefaultText>
                <DefaultText>{meal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{meal.affordability.toUpperCase()}</DefaultText>
            </View>
            <DefaultText style={styles.title}>Ingredients</DefaultText>
            {meal.ingredients.map(ingredient => <ListItem key={ingredient}>{ingredient}</ListItem>)}
            <DefaultText style={styles.title}>Steps</DefaultText>
            {meal.steps.map(step => <ListItem key={step}>{step}</ListItem>)}
            <Button title={'Back to main screen'} onPress={() => {
                props.navigation.popToTop();
            }
            } />
        </ScrollView>
    );
}

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
        fontFamily: 'ubuntu-regular',
        fontSize: 22,
        textAlign: 'center',
    }
});

MealDetailScreen.navigationOptions = navigationData => {
    const meal = navigationData.navigation.getParam('meal');

    return {
        headerTitle: meal.title,
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