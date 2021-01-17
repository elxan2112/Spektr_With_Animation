const initialStatus = true;

export function movieLoadingSplashReducer (state = initialStatus, action){
    switch(action.type){
        case 'loadingSplash':
            console.log('reducer loading!')
            console.log(action.payload)
            return{ visibleStatus: action.payload}
        default: return state
    }
}