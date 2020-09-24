export const addedToCard = (id, name ) =>({
    type: 'addToCart',
    payload: {
        id,
        name
    }
})

export const removedFromCart = ( id ) =>({
    type: 'removeFromCart',
    payload: {
        id,
    }
})

const reducer = ( state=[], action) => {

    if(action.type === 'addToCart'){
        return[
            ...state,
            {
                name: action.payload.name,
                id : action.payload.id
            }
        ]
    }

    else if(action.type === 'removeFromCart'){
    return state.filter(product => product.id !== action.type.id)
    }
}


export default reducer