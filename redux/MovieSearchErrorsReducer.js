const initialStatus = false;

export function errorScreenReducer (state = initialStatus, action){
    switch(action.type){
        case 'loadingErrorScreen':
            console.log('error screen reducer')
            console.log(action.payload)
            return{ errorStatus: action.payload}
        default: return state
    }
}