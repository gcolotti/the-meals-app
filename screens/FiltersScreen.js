import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from './../components/CustomHeaderButton';
import FilterSwitch from './../components/FilterSwitch';

const FiltersScreen = props => {
    const { navigation } = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);

    const applyFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        };
        console.log(appliedFilters);
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

    useEffect(() => {
        navigation.setParams({ save: applyFilters })
    }, [applyFilters]);

    return (
        <View style={styles.screen}>
            <FilterSwitch label={'Gluten Free'} value={isGlutenFree} onValueChange={setIsGlutenFree} />
            <FilterSwitch label={'Lactose Free'} value={isLactoseFree} onValueChange={setIsLactoseFree} />
            <FilterSwitch label={'Vegan'} value={isVegan} onValueChange={setIsVegan} />
            <FilterSwitch label={'Vegetarian'} value={isVegetarian} onValueChange={setIsVegetarian} />
        </View>
    );
}

FiltersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filter Meals',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title={'Menu'}
                    iconName={'ios-menu'}
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        ),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title={'Save'}
                    iconName={'ios-save'}
                    onPress={navData.navigation.getParam('save')}
                />
            </HeaderButtons>
        ),
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    }
});

export default FiltersScreen;