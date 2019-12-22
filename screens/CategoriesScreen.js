import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import CategoriesGridTile from '../components/CategoryGridTile';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from './../components/CustomHeaderButton';
import { CATEGORIES } from './../data/dummy-data';


const CategoriesScreen = props => {

    const renderGridItem = itemData => {
        return (
            <CategoriesGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params: {
                            category_id: itemData.item.id
                        }
                    })
                }} />
        );
    }

    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
        />
    );
}

CategoriesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Meals Categories',
        headerLeft: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
                title={'Menu'}
                iconName={'ios-menu'}
                onPress={() => {
                    navData.navigation.toggleDrawer();
                }}
            />
        </HeaderButtons>
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CategoriesScreen;