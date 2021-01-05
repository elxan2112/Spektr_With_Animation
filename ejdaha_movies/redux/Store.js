import { applyMiddleware, combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist' 
import {reducerForFavorites, reducerForSearch} from './Reducer'
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';

const myReducers = combineReducers({reducerForSearch, reducerForFavorites})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}
const persistedReducer = persistReducer(persistConfig, myReducers)

export const mystore = createStore(persistedReducer, applyMiddleware(thunk))
export const mypersistor = persistStore(mystore)