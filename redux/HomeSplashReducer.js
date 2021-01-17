const initialStatus = true;

export function reducerForSplash (state = initialStatus, action){
    switch(action.type){
        case 'changeBlank':
            console.log('reducer')
            console.log(action.payload.payload)
            return{ status: action.payload.payload}
        default: return state
    }
}