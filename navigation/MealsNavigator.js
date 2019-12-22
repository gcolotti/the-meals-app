import React from 'react';
import { Platform, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from './../screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const defaultOptions = {
    headerStyle: {
        backgroundColor: Colors.primaryColor,
    },
    headerTintColor: 'white'
};

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meals Categories',
        }
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultOptions,
});

const favoritesNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,

}, {
    defaultNavigationOptions: defaultOptions,
});

FavoritesScreen.navigationOptions = {
    headerTitle: 'Your favorite meals',
}

const tabsConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name={'ios-restaurant'} size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primaryColor,
        }
    },
    Favorites: {
        screen: favoritesNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name={'ios-star'} size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.accentColor,
        }
    }
};

const MealsFavTabNavigator = Platform.OS === 'android' ?
    createMaterialBottomTabNavigator(tabsConfig, {
        activeTintColor: 'red',
        shifting: true,
    })
    : createBottomTabNavigator(tabsConfig, {
        tabBarOptions: {
            activeTintColor: Colors.accentColor,
        }
    });

export default createAppContainer(MealsFavTabNavigator);