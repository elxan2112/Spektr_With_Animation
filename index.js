/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import {mystore, mypersistor} from './redux/Store'


const NewApp = () =>{
    return(
        <Provider store = {mystore}>
            <PersistGate loading = {null} persistor = {mypersistor}>
                <App/>
            </PersistGate>            
        </Provider>   
    );
};

AppRegistry.registerComponent(appName, () => NewApp);