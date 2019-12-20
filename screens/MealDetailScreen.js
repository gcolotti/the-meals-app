import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from './../components/CustomHeaderButton';

const MealDetailScreen = props => {
    const meal = props.navigation.getParam('meal');

    return (
        <View style={styles.screen}>
            <Text>The Meal Detail Screen!</Text>
            <Text>{meal.title}</Text>
            <Button title={'Back to main screen'} onPress={() => {
                props.navigation.popToTop();
            }
            } />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
                onPress={() => {console.log('Marked as Favorite!! ! ! ! ! ! ')}}
            />
        </HeaderButtons>
    };
};

export default MealDetailScreen;