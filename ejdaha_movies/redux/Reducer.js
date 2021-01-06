const searchName = {data: []}

export function reducerForSearch (state = searchName, action){
    switch(action.type){
        case 'searchAction':
            console.log('action payload')
            console.log(action.payloadData)
            return {data: action.payloadData}
            
        case 'cleanSearchAction':
            console.log('cleanSearchAction in Reducer!')
            return {data: []}
        default: return state;
    }
}

const firstStateFavorites = {favoritData: [{}]}

export function reducerForFavorites (state = firstStateFavorites, action){
    switch(action.type){
        case 'addingAction':
            console.log('addingAction= ')
            console.log(action.payload)
            if(!state.favoritData.includes(action.payload)){
                return {
                    ...state, favoritData: [...state.favoritData, action.payload]
                }
            }
            else{
                return {
                    ...state, favoritData: [...state.favoritData]
                }
            }

        case 'cleanFavoritesAction':
            console.log('cleanFavoritesAction')
            return {
                favoritData: []
            }

        case 'removeAction':
            console.log('removeAction')
            state.favoritData.splice(action.payloadIndex, 1)
            return{
                ...state, favoritData: [...state.favoritData]
                // ...state, favoritData: favoritData.splice(action.payloadIndex, action.payloadIndex)
            }
        default: return state;
    }
}