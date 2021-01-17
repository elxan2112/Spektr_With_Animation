import { applyMiddleware, combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist' 
import {reducerForFavorites, reducerForSearch} from './Reducer'
import {reducerForSplash} from './HomeSplashReducer'
import {newsSplashReducer} from './NewsSplashReducer'
import {errorScreenReducer} from './MovieSearchErrorsReducer'
import {movieLoadingSplashReducer} from './MovieLoadingSplashReducer'
import createSagaMiddleware from 'redux-saga'
import AsyncStorage from '@react-native-community/async-storage';
import { dataWatcher } from './Sagas';

const myReducers = combineReducers({reducerForSearch, reducerForFavorites, 
  reducerForSplash, newsSplashReducer, movieLoadingSplashReducer, errorScreenReducer})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}
const persistedReducer = persistReducer(persistConfig, myReducers)

export const sagaMiddleware = createSagaMiddleware();
export const mystore = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
export const mypersistor = persistStore(mystore)
sagaMiddleware.run(dataWatcher)