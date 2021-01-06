import {takeEvery, put, call} from 'redux-saga/effects'
import {searching} from './Action'

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
    const data = yield call(changeName(name))
    console.log('worker ')
    console.log(data)
    yield put(searching(data))
}

export function* dataWatcher(){
    yield takeEvery('Load_Data', dataWorker)
}