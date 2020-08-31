import * as actionTypes from './actionTypes'
import Axios from 'axios'

export const addIngredient = (name)=>{
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
}


export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
}

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED,
    }
}

export const initIngredients = () => {
    dispatch => {
        axios.get('https://react-burger-builder-5db29.firebaseio.com/ingredients.json')
            .then(res => {
                dispatch(setIngredients(res.data))
            }
            )
            .catch(
                err => {
                    dispatch(fetchIngredientsFailed())
                }
            )
    }
}