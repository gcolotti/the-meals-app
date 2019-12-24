export const TOOGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const toogleFavorite = (id) => {
    return { type: TOOGLE_FAVORITE, mealId: id };
};