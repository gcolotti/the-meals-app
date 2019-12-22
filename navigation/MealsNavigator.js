import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from './../screens/FavoritesScreen';
import FiltersScreen from './../screens/FiltersScreen';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const defaultOptions = {
    headerStyle: {
        backgroundColor: Colors.primaryColor,
    },
    headerTintColor: 'white'
};

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultOptions,
});

const FavoritesMealsNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,

}, {
    defaultNavigationOptions: defaultOptions,
});

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
        screen: FavoritesMealsNavigator,
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

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen,
});

const mainNavigator = createDrawerNavigator({
    MealsFavs: MealsFavTabNavigator,
    Filters: FiltersNavigator,
}, {

});

export default createAppContainer(mainNavigator);