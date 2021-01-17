import {takeEvery, put, call} from 'redux-saga/effects'
import {changeBlank, searching, loadingSplash, changeNewsBlank, loadingErrorScreen} from './Action'
import NetInfo from "@react-native-community/netinfo";

function changeName(name){
    return async() =>{
        try{
            const url = `http://api.tvmaze.com/search/shows?q=${name.payload}`
            const response = await fetch(url)
            return await response.json()
          }
          catch (e){
            console.log('Change name Action error: ' + e)
            console.log(url.payload)
          }
    }
}



function* dataWorker(name){
    NetInfo.fetch().then(state => {
        console.log("Connection type", state.type);
        console.log("Is internet reachable?", state.isInternetReachable);
        this.internetReachable = state.isInternetReachable
      });
      if(this.internetReachable === true){
        yield put(loadingErrorScreen(true));
        yield put(loadingSplash(true));
        const data = yield call(changeName(name));
        yield put(loadingSplash(false));
        yield put(searching(data));
    }
    else{
        yield put(loadingErrorScreen(false))
    }
    
}

function* splashScreenWorker(status){
    console.log('splash screen saga');
    console.log(status);
    yield put(changeBlank(status));
}
function* newsSplashScreenWorker(status){
    console.log('news splash screen saga');
    console.log(status);
    yield put(changeNewsBlank(status))
}

export function* dataWatcher(){
    yield takeEvery('Load_Data', dataWorker);
    yield takeEvery('Blank', splashScreenWorker);
    yield takeEvery('newsBlank', newsSplashScreenWorker)
}