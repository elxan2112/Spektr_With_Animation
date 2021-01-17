const initialStatus = true;

export function newsSplashReducer (state = initialStatus, action){
    switch(action.type){
        case 'changeNewsBlank':
            console.log('news splash reducer!')
            console.log(action.payload)
            return{ visibleStatus: action.payload}
        default: return state
    }
}